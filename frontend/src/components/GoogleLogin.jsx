import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { googleAuth } from './api';

function GoogleLogin() {
  const responseGoogle = async (authResult) => {
    try {
      if (authResult['code']) {
        const result = await googleAuth(authResult['code']);
        console.log('User info:', result.data.user);
      }
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: (error) => {
      console.error('Error during Google login flow:', error);
    },
    flow: 'auth-code',
  });

  return (
    <div className="App">
      <button onClick={googleLogin}>Login With Google</button>
    </div>
  );
}

export default GoogleLogin;
