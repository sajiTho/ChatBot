import React from 'react'
import GoogleLogin from 'react-google-login'

const LoginWithGoogleButton = () => {
  const responseGoogle = (response: any) => {
    // Handle Google login response
  }

  const onFailure = (error: any) => {
    console.log(error)
  }

  return (
    <GoogleLogin
      clientId="YOUR_CLIENT_ID"
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    />
  )
}

export default LoginWithGoogleButton
