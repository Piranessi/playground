import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../components/AuthContext';

function SpotifyAuthorization() {
  const { isLoggedIn, login } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSpotifyLoginStatus = async () => {
      try {
        const response = await axios.get('http://spotifyorganizer.matgosoft.com/check-login');
        const userIsLoggedIn = response.data.isLoggedIn;
        if (userIsLoggedIn) {
          login(); // Update the context if the user is logged in
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          console.error('Request canceled:', error.message);
        } else if (error.response) {
          console.error('Error response from server:', error.response.data);
          // Handle server error if needed
        } else if (error.request) {
          console.error('No response received:', error.request);
          // Handle network error if needed
        } else {
          console.error('Error setting up the request:', error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    checkSpotifyLoginStatus();

    // Clean up the effect if unmounting (optional)
    return () => {
      // Cancel the Axios request (if using a cancel token)
    };
  }, []); // Removed 'login' from the dependency array

  const handleLogin = () => {
    // Redirect the user to the Spotify login page
    window.location.href = 'http://spotifyorganizer.matgosoft.com/login';
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
