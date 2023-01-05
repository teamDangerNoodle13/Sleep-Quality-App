import HomeIsland from '../Components/HomeIsland.jsx';
import Navigation from "./Navigation.jsx";
import React from 'react';

const Home = (props) => {

  return (
    <div className='home-container'>
      {/* <UserContext.Consumer> */}
        <Navigation />
        <h3>Welcome!</h3> // DYNAMIC
        <HomeIsland />
      {/* </UserContext.Consumer> */}
    </div>
  )
}

export default Home;
