import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

type SocialLoginProps = {
    onGoogleSuccess: (response: GoogleLoginResponse | GoogleLoginResponseOffline) => void;
    onGoogleFailure: () => void;
    onFacebookSuccess: (response: any) => void;
    onFacebookFailure: () => void;
  };
  

const SocialLogin = ({
  onGoogleSuccess,
  onGoogleFailure,
  onFacebookSuccess,
  onFacebookFailure,
}: SocialLoginProps) => {

  const responseFacebook = (response: any) => {
    console.log(response);
    onFacebookSuccess(response);
  };

  const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);
    onGoogleSuccess(response);
  };
  

  return (
    <div>
      <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={onGoogleFailure}
        cookiePolicy={'single_host_origin'}
      />
      <FacebookLogin
        appId="YOUR_FACEBOOK_APP_ID"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        onFailure={onFacebookFailure}
      />
    </div>
  );
};

export default SocialLogin;
