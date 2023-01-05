import React, { useEffect, useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";


const RegisterIsland = () => {

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
          (response !== null) ? navigate('/home') : console.log('invalid input');
        })
}

    return (
        <div className="register-container">
            <form id="register-form" onSubmit={handleSubmit} >
            <input
                className="firstName"
                type="text"
                name="name"
                placeholder="First Name..."
                value ={name}
                onChange={onChange}
                required
                />
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