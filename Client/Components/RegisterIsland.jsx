import React, { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";


const RegisterIsland = (props) => {

  const [data, setData] = useState({
    email: "",
    password: "",
    name: ""
}
);

const { email, password, name} = data;

const onChange = e => {
  setData({...data, [e.target.name]: e.target.value});
};
const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const userObj = {email, password, name};

      fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          },
        mode: 'cors',
        body: JSON.stringify(userObj)
        })
        .then(response => {
          if(response === null) {
            navigate('/register');
          } else {
            return response.json();
          }
        })
        .then((json) => {
          const { _id, name } = json;
          const userData = {
            id: _id,
            name: name
          }
          props.setUser(userData);
          navigate('/home');
        })
        .catch(err => {
          console.log('ERROR: ', err);
        })
  }

    return (
        <div className="register-container">
            <form id="register-form" onSubmit={handleSubmit} >
            <input
                className="registerInput"
                type="text"
                name="name"
                placeholder="First name..."
                value ={name}
                onChange={onChange}
                required
                />
                <input
                className="registerInput"
                type="email"
                name="email"
                placeholder="Email..."
                value ={email}
                onChange={onChange}
                required
                />
                <input
                className="registerInput"
                type="password"
                name="password"
                placeholder="Password..."
                value ={password}
                onChange={onChange}
                required
                />
                <div id= "buttonRow">
                  <button type ="submit" className="register" id="register" >
                    Register
                  </button>
                <Link to="/" className="login" id="login">
                  Back to login
                </Link>
                </div>
            </form>
        </div>
    )
}
export default RegisterIsland;