import e from "cors";
import React, { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";


const LoginIsland = () => {

  const [data, setData] = useState({
        email: "",
        password: ""
    }
  );

  const { email, password} = data;

  const onChange = e => {
    setData({...data, [e.target.name]: e.target.value});
  };

// FILL OUT ONCHANGE

  const handleSubmit = (e) => {
    e.preventDefault();
     const email = e.target[0].value;
     const password = e.target[1].value;
     const userObj = { email, password };

      fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          },
        mode: 'cors',
        body: JSON.stringify(userObj)
        })
        .then((response) => {
          response.json()
          return response.redirect("/home");
        })
        .catch(err => {
          console.log('ERROR: ', err);
        })
}


    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <input
                className="email"
                type="email"
                name="email"
                placeholder="email..."
                value ={email}
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
                  <Link to="/register" className="register" id="register">
                    Sign Up
                  </Link>
                </div>
            </form>
        </div>
    )
}
export default LoginIsland;