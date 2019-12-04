import React from 'react';
import GoogleLogin from 'react-google-login';
 
 
const responseGoogle = (response) => {
  console.log(response);
}
 
export default class InterviewTimeSchedule extends React.Component{
    render() {
    return (
        <div>
            <GoogleLogin
    clientId="698566757398-kqs9ob7nlfkqje1r165af4g0l2u25348.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
        </div>

)
    }
}