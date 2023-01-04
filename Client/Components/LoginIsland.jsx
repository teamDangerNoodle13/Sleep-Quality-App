import e from "cors";
import React, { useEffect, useState } from "react";


const LoginIsland = () => {

  const [data, setData] = useState({
        username: "",
        password: ""
    }
  );

  const {username, password} = data;

  //const onChange = e => {
//     setData({...data, [e.target.name]: e.target.value});
//   };



  const handleSubmit = (e) => {
    e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
        console.log('forData', formData)

      const formJSON = Object.fromEntries(formData.entries())
        console.log('entry', formJSON.newEntry)

        // fetch('http://localhost:3000/users', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*',
        //     },
        //     mode: 'cors',
        //     body: JSON.stringify({ 
        //         username: '63b3234df79c9575703ac220',
        //         password: formJSON.newEntry
        //     })
        // })
        // .then((response) => response.json())
        // document.getElementById('add-journal').reset();


}


    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
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
                  <Link to="/register" className="register" id="register" onClick={routeChange}>
                    Sign Up
                  </Link>
                </div>
            </form>
        </div>
    )
}
export default LoginIsland;