import '../Sass/styles.scss';

import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Home from './Home.jsx';
import UserPage from './UserPage.jsx';
import JournalContainer from './JournalContainer.jsx';
import Questionnaire from "../Components/Questionnaire.jsx";
import UserContext from './UserContext.jsx';

<<<<<<< HEAD
// const UserContext = React.createContext({
//     user: {
//         id: 'o7239fja98psdfja',
//         name: 'Fred'
//     },
//     // setUser function
// });

const App = () => {
    // const [user, setUser] = useState(null);

    return(
        <div>
            {/* <UserContext.Provider value={{user, setUser}} > */}
=======

const App = () => {
    const [user, setUser] = useState({
        id: 'o7239fja98psdfja',
        name: 'Fred'
    });

    return(
        <UserContext.Provider value={{user, setUser}} >
            <div>
>>>>>>> 6767b0858ea99d3eb3e37e7f56483cb9b066f189
                <Routes>
                    <Route path='/' element={ <Login />} />
                    <Route path='/register' element={ <Register />} />
                    <Route path='/home' element={ <Home />} />
                    <Route path='/home/questions' element={ <Questionnaire /> } />
                    <Route path='/userPage' element={<UserPage /> } />
                    <Route path='/home/journals' element={ <JournalContainer /> } />
                    {/* 
                        This is a route to a stretch feature.
                        <Route path='/sleep-data' element={} /> 
                    */}
                </Routes>
<<<<<<< HEAD
            {/* </UserContext.Provider > */}
        </div>
=======
            </div>
        </UserContext.Provider >
>>>>>>> 6767b0858ea99d3eb3e37e7f56483cb9b066f189
    )
}

export default App;
