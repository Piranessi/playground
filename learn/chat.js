//#App.js - react

import React, { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Login from './pages/Login';
import { HelloContext } from './components/HelloContext';

function App() {
  // eslint-disable-next-line
  const { data, updateData } = useContext(HelloContext);

  return (
    <div className="App">      
      <BrowserRouter>
        {data === true ? <Navbar />  : null}
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/about' exact Component={About}/>
          <Route path='/contact' exact Component={Contact}/>
          <Route path='/login' exact Component={Login}/>
        </Routes>
        {data === true ? <Footer />  : null}
        </BrowserRouter>
    </div>
  );
}

export default App;


//# Login.js - react
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../components/AuthContext';
import { useNavigate } from 'react-router-dom';

function SpotifyAuthorization() {
  const { isLoggedIn, login } = useAuth();
  const [loading, setLoading] = useState(true);
  const [authorizeURL, setAuthorizeURL] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const source = axios.CancelToken.source();

    const checkSpotifyLoginStatus = async () => {
      try {
        const response = await axios.get('http://spotifyorganizer.matgosoft.com/check-login', {
          cancelToken: source.token,
        });
        const userIsLoggedIn = response.data.isLoggedIn;
        if (userIsLoggedIn) {
          login(); // Update the context if the user is logged in
        }
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error('Error checking login status:', error.message);
          // Handle other errors if needed
        }
      } finally {
        setLoading(false);
      }
    };

    checkSpotifyLoginStatus();

    // Clean up the effect if unmounting
    return () => {
      source.cancel('Request canceled: Component unmounted');
    };
  }, [login]); // 'login' added to the dependency array

  const handleLogin = () => {
    // Redirect the user to the Spotify login page
    window.location.href = authorizeURL;
  };

  useEffect(() => {
    // Fetch the Spotify authorization URL
    const fetchSpotifyAuthURL = async () => {
      try {
        const response = await axios.get('http://spotifyorganizer.matgosoft.com/login');
        setAuthorizeURL(response.data.authorizeURL);
      } catch (error) {
        console.error('Error fetching Spotify authorization URL:', error.message);
        // Handle errors if needed
      }
    };

    fetchSpotifyAuthURL();
  }, []); // Empty dependency array to run only once when the component mounts

  useEffect(() => {
    // Check for a callback from Spotify
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // Handle the Spotify callback logic here
      handleSpotifyCallback(code);
    }
  }, []); // Empty dependency array to run only once when the component mounts

  const handleSpotifyCallback = async (code) => {
    try {
      // Make a request to your backend to exchange the code for an access token
      const response = await axios.get(`http://spotifyorganizer.matgosoft.com/callback?code=${code}`);
      // Assuming your backend sends a success response upon successful authentication
      if (response.data.success) {
        // Update the context
        login();
        // Navigate the user back to the original login route
        navigate('/login');
      } else {
        // Handle authentication failure
      }
    } catch (error) {
      console.error('Error handling Spotify callback:', error.message);
      // Handle errors if needed
    }
  };

  return (
    <div className="Login">
      {loading ? (
        <p>Loading...</p>
      ) : isLoggedIn ? (
        <p>User is logged in!</p>
      ) : (
        <>
          <p>User is not logged in!</p>
          <button onClick={handleLogin}>Login with Spotify</button>
        </>
      )}
    </div>
  );
}

export default SpotifyAuthorization;


//# index.js - nodejs
import express from 'express';
import session from 'express-session';
import SpotifyWebApi from 'spotify-web-api-node';
import cors from 'cors';
import expressWs from 'express-ws';

const app = express();
const spotifyApi = new SpotifyWebApi({
  clientId: '80c84ec62fe94174ab66c2105ce29b22',
  clientSecret: '87afc455f7354769a848417320ecae16',
  redirectUri: 'http://spotifyorganizer.matgosoft.com/callback',
});

const corsOptions = {
  origin: (origin, callback) => {
    // Check if the origin is allowed, or use a dynamic check based on your requirements
    const allowedOrigins = ['http://so.matgosoft.com', 'http://so.matgosoft.com/login', 'http://spotifyorganizer.matgosoft.com'];
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

// Enable WebSocket support
const { getWss, applyTo } = expressWs(app);
// WebSocket connection handling
app.ws('/ws', (ws) => {
  console.log('WebSocket connection established');

  // Handle WebSocket communication

  // Example: Broadcast a message to all clients
  ws.on('message', (message) => {
    getWss().clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

app.get('/', (req, res) => {
  res.json({msg:"hw1"});
});

app.get('/login', (req, res) => {
  // Check if the user is already authenticated with Spotify
  if (req.session.spotifyAccessToken) {
    // User is already logged in, redirect or handle accordingly
    res.json({ message: 'User is already logged in.' });
  } else {
    // User is not logged in, initiate Spotify login
    const scopes = ['user-library-read', 'user-library-modify'];
    const redirectUri = 'http://so.matgosoft.com/'; // Update the redirect URI
    const authorizeURL = spotifyApi.createAuthorizeURL(scopes, null, redirectUri);
    res.json({ authorizeURL }); // Return the authorization URL to the React component
  }
});

  
app.get('/callback', async (req, res) => {
  const { code } = req.query;
  try {
    const data = await spotifyApi.authorizationCodeGrant(code);
    const accessToken = data.body['access_token'];
    // Store the access token in the session
    req.session.spotifyAccessToken = accessToken;
    // Set the access token in the Spotify API instance
    spotifyApi.setAccessToken(accessToken);
    res.redirect('http://so.matgosoft.com/login');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error occurred while authenticating with Spotify.');
  }
});

// Add a new endpoint to check if the user is logged in
app.get('/check-login', (req, res) => {
  try {
    // Check if the user is authenticated by looking at the session data
  // Check if the user is authenticated by looking at the session data
  const isLoggedIn = !!req.session.spotifyAccessToken;
  console.log('isLoggedIn:', isLoggedIn);

  // Respond with the login status
  res.json({ isLoggedIn });

  } catch (error) {
    console.error('Error in /check-login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//## react frontend is on http://so.matgosoft.com and node backend is on http://spotifyorganizer.matgosoft.com
//## when I try to log in through http://so.matgosoft.com/login it redirects me to spotify page, asks for auth (OK), and it redirects me to
//## http://so.matgosoft.com/login but user is not logged in. How can I fix it