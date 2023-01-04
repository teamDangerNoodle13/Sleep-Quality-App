import React, { useEffect, useState } from "react";


const RegisterIsland = () => {

  const handleSubmit = (e) => {
    e.preventDefault();



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
                required
                />
                <input
                className="email"
                type="email"
                name="username"
                placeholder="email..."
                value ={username}
                required
                />
                <input
                className="password"
                type="password"
                name="password"
                placeholder="password..."
                value ={password}
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