import '../Sass/styles.scss';

import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Login from './Login.jsx';
import Register from './Register.jsx';
import Home from './Home.jsx';
import UserPage from './UserPage.jsx';
import JournalContainer from './JournalContainer.jsx';
import Questionnaire from "../Components/Questionnaire.jsx";

const App = () => {
    const [user, setUser] = useState(null);

    return(
        <div>
            <Routes>
                <Route path='/' element={ <Login
                setUser={setUser} />} />
                <Route path='/register' element={ <Register
                setUser={setUser} />} />
                <Route path='/home' element={ <Home
                user={user} />} />
                <Route path='/questions' element={ <Questionnaire
                user={user} /> } />
                <Route path='/userPage' element={<UserPage
                user={user} /> } />
                <Route path='/journals' element={ <JournalContainer
                user={user} /> } />
                {/* 
                    This is a route to a stretch feature.
                    <Route path='/sleep-data' element={} /> 
                */}
            </Routes>
        </div>
    )
}

export default App;
