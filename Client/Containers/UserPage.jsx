import HomeIsland from '../Components/HomeIsland.jsx';
import Navigation from "./Navigation.jsx";
import React from 'react';
import UserPageIsland from "../Components/UserPageIsland.jsx";
import UserContext from './UserContext.jsx';

const UserPage = () => {

  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <div className='userPage-container'>
            <Navigation />
            <h1>Hello UserPage</h1>
            <UserPageIsland />
          </div>
        )
      }}
    </UserContext.Consumer>
  )
}

export default UserPage;
