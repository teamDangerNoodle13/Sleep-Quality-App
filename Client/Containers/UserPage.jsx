import HomeIsland from '../Components/HomeIsland.jsx';
import Navigation from "./Navigation.jsx";
import React from 'react';

const UserPage = () => {

  return (
    <div className='userPage-container'>
      <Navigation />
      
      <HomeIsland />
    </div>
  )
}

export default UserPage;
