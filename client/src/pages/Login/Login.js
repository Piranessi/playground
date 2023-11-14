import React, { useEffect } from 'react';
import axios from 'axios';

function SpotifyAuthorization (){
  useEffect(() => {
    const redirectToSpotifyLogin = async () => {
      try {
        const response = await axios.get('http://spotifyorganizer.matgosoft.com/login'); 
        const authorizeURL = response.data.authorizeURL;
        window.location.href = authorizeURL;
        console.log("authorizeURL: ", authorizeURL); //DEBUG
      } catch (error) {
        console.error('Error:', error);
        // Handle error if needed
      }
    };

    redirectToSpotifyLogin();
  }, []);

  return (
    <div className='Login'>
      <h1>Spotify Authorization</h1>
      {/* You can add loading spinner or other UI elements here */}
    </div>
  );
};

export default SpotifyAuthorization;