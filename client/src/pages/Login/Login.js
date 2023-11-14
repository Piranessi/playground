import React, { useEffect } from 'react';
import axios from 'axios';
import queryString from 'query-string';

function SpotifyAuthorization (){
  useEffect(() => {
    const params = queryString.parse(window.location.search);
    const { code } = params;
    console.log("test, ", code);
    if (!code) {
      // Use Axios to exchange the authorization code for an access token
      axios.post('https://spotifyorganizer.matgosoft.com/login', { code })
        .then(response => {
          const { access_token } = response.data;
          console.log("we have access");
          // Store the access token in local storage or context for future use
          // For example, you can use Redux or React Context API for state management
          // localStorage.setItem('access_token', access_token);
        })
        .catch(error => {
          console.error('Error exchanging code for access token:', error);
        });
    }
  }, []);

  return (
    <div className='Login'>
      <h1>Spotify Authorization</h1>
      {/* You can add loading spinner or other UI elements here */}
    </div>
  );
};

export default SpotifyAuthorization;