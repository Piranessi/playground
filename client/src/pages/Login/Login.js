import React, { useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../components/AuthContext';

function SpotifyAuthorization() {
  const { isLoggedIn, login } = useAuth();

  useEffect(() => {
    const checkSpotifyLoginStatus = async () => {
      try {
        const response = await axios.get('http://spotifyorganizer.matgosoft.com/check-login');
        const userIsLoggedIn = response.data.isLoggedIn;
        if (userIsLoggedIn) {
          login(); // Update the context if the user is logged in
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle error if needed
      }
    };

    checkSpotifyLoginStatus();
  }, [login]);

  return (
    <div className="Login">
      {isLoggedIn ? (
        <p>User is logged in!</p>
      ) : (
        <>
          <p>User is not logged in!</p>
          {/* Your login UI elements */}
        </>
      )}
    </div>
  );
}

export default SpotifyAuthorization;
