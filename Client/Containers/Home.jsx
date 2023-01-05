import HomeIsland from '../Components/HomeIsland.jsx';
import Navigation from "./Navigation.jsx";
import React from 'react';
import UserContext from './UserContext.jsx';
import { useContext } from 'react';

const Home = () => {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <div className='home-container'>
            <Navigation />
            <h3>Welcome {value.user.name}!</h3>
            <HomeIsland />
          </div>
        )
      }}
    </UserContext.Consumer>
  )
}

export default Home;
