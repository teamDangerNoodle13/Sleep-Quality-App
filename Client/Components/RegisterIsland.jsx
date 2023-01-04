import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";


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
        .then((response) => response.json())
        return redirect("/home");
}

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
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
                </div>
            </form>
        </div>
    )
}
export default RegisterIsland;