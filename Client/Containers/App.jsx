import '../Sass/styles.scss';

import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Home from './Home.jsx';
import UserPage from './UserPage.jsx';
import JournalContainer from './JournalContainer.jsx';
import QuestionnaireContainer from './QuestionnaireContainer.jsx';
import UserContext from './UserContext.jsx';


const App = () => {
    const [user, setUser] = useState({
        id: 'o7239fja98psdfja',
        name: 'Fred'
    });

    const [sum, setSum] = useState(0);

    return(
        <UserContext.Provider value={{user, setUser, sum, setSum}} >
            <div>
                <Routes>
                    <Route path='/' element={ <Login />} />
                    <Route path='/register' element={ <Register />} />
                    <Route path='/home' element={ <Home />} />
                    <Route path='/home/questions' element={ <QuestionnaireContainer /> } />
                    <Route exact path='/home/userPage' element={<UserPage /> } />
                    <Route exact path='/home/journals' element={ <JournalContainer /> } />
                    {/* 
                        This is a route to a stretch feature.
                        <Route path='/sleep-data' element={} /> 
                    */}
                </Routes>
            {/* </UserContext.Provider > */}
            </div>
        </UserContext.Provider >
    )
}

export default App;
