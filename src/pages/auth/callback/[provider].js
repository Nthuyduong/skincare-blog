import React, { useEffect } from 'react';
import { loginCallbackApi } from '@services/auth';
import { useRouter } from 'next/router';

const AuthCallback = ({ provider, code }) => {
  
  const router = useRouter();

  useEffect(() => {
    handleLoginCallback();
  }, []);

  const handleLoginCallback = async () => {
    console.log(provider, code);
    const response = await loginCallbackApi(provider, code);
    console.log(response);
    if (response.status) {
      localStorage.setItem('access_token', response.token);
      const redirectUrl = sessionStorage.getItem('redirectUrl');
      router.push(redirectUrl);
    } else {
    }
  }

  return (
    <div>
      <h1>Please wait ...</h1>
    </div>
  );
}

AuthCallback.getInitialProps = ({ query }) => {
  console.log(query);
  const { provider, code } = query;
  return { 
    provider: provider,
    code: code
  };
}

export default AuthCallback;