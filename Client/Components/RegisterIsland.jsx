import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";


const RegisterIsland = () => {

  const [data, setData] = useState({
    firstName: "",
    username: "",
    password: ""
}
);

const {firstName, username, password} = data;

const onChange = e => {
  setData({...data, [e.target.name]: e.target.value});
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target[0].value;
    const username = e.target[1].value;
    const password = e.target[2].value;
    const userObj = {firstName,username, password};

      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          },
        mode: 'cors',
        body: JSON.stringify(userObj)
        })
        .then((response) => response.json())
        .then(redirect("/home"));
}

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
            <input
                className="firstName"
                type="text"
                name="firstName"
                placeholder="First Name..."
                value ={firstName}
                onChange={onChange}
                required
                />
                <input
                className="email"
                type="email"
                name="username"
                placeholder="email..."
                value ={username}
                onChange={onChange}
                required
                />
                <input
                className="password"
                type="password"
                name="password"
                placeholder="password..."
                value ={password}
                onChange={onChange}
                required
                />
                <div id= "buttonRow">
                  <button type ="submit" className="login" id="login" >
                    Log in
                  </button>
                </div>
            </form>
        </div>
    )
}
export default RegisterIsland;