import LoginIsland from '../Components/LoginIsland.jsx';
import Navigation from './Navigation.jsx';
import React from 'react';
import UserContext from './UserContext.jsx';

const Login = () => {

  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <div className='login-container'>
            <Navigation />
            <h3>Track and improve your sleep... </h3>
            <LoginIsland setUser={value.setUser}/>
          </div>
        )
      }}
    </UserContext.Consumer>
  )
}

export default Login;
