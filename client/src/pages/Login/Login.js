import React, { useEffect } from 'react';
import axios from 'axios';

function SpotifyAuthorization (){
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkSpotifyLoginStatus = async () => {
      // Make a request to your server to check if the user is logged in to Spotify
      try {
        const response = await axios.get('http://spotifyorganizer.matgosoft.com/check-login');
        const userIsLoggedIn = response.data.isLoggedIn;
        setIsLoggedIn(userIsLoggedIn);
      } catch (error) {
        console.error('Error:', error);
        // Handle error if needed
      }
    };

    checkSpotifyLoginStatus();
  }, []); // Empty dependencies array to run once on mount

  const redirectToSpotifyLogin = async () => {
    try {
      const response = await axios.get('http://spotifyorganizer.matgosoft.com/login');
      const authorizeURL = response.data.authorizeURL;
      window.location.href = authorizeURL;
      console.log("authorizeURL: ", authorizeURL); // DEBUG
    } catch (error) {
      console.error('Error:', error);
      // Handle error if needed
    }
  };

  // Assuming you have a button or some UI element to trigger the login
  const handleLoginButtonClick = () => {
    if (!isLoggedIn) {
      redirectToSpotifyLogin();
    } else {
      // User is already logged in, handle accordingly
    }
  };

  return (
    <div className="Login">
      {/* Your UI elements */}
      <button onClick={handleLoginButtonClick}>Login to Spotify</button>
    </div>
  );
};

export default SpotifyAuthorization;