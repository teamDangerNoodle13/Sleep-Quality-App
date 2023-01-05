import HomeIsland from '../Components/HomeIsland.jsx';
import Navigation from "./Navigation.jsx";
import React from 'react';
import UserPageIsland from "../Components/UserPageIsland.jsx";
import UserContext from './UserContext.jsx';
import { useState } from 'react';

const UserPage = () => {
  const [response, setResponse] = useState('');

  return (
    <UserContext.Consumer>
      {(value) => {
        // `http://localhost:3000/forms/response/score/${value.sum}`;
        fetch('http://localhost:3000/forms/response/?' + new URLSearchParams({
          score: value.sum,
        }))
        .then((response) => {
          return response.json();
        })
        .then((json) => {
            console.log('here is the json ' + json);
            setResponse(json);
        })
        .catch((err) => {
          console.log("it's broken");
        })
        return (
          <div className='userPage-container'>
            <Navigation />
            <h1>Find help improving sleep</h1>
            <UserPageIsland sum={value.sum} response={response} />
          </div>
        )
      }}
    </UserContext.Consumer>
  )
}

export default UserPage;

// fetch ('/forms', {
//   method: 'POST',
//   headers: {
//       'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//       userId: props.userId,
//       answers: answers,
//       totalScore: sum
//   })
// }) 