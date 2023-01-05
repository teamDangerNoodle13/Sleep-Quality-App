import RegisterIsland from '../Components/RegisterIsland.jsx';
import React from 'react';
import UserContext from './UserContext.jsx';
import NavigationMod from './NavigationMod.jsx';

const Register = () => {

  return (
    <UserContext.Consumer>
      {(value) => {
      return (  
        <div className='register-container'>
        <NavigationMod />
        <RegisterIsland setUser={value.setUser}/>
        </div>
      )
     }}
    </UserContext.Consumer>
  )
}

export default Register;
