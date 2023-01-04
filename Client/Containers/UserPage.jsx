import HomeIsland from '../Components/HomeIsland.jsx';
import Navigation from "./Navigation.jsx";
import React from 'react';

const userPage = () => {

  return (
    <div className='userPage-container'>
      <Navigation />
      
      <HomeIsland />
    </div>
  )
}

export default userPage;
