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
    return(
        <div>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/home' element={<Home />} />
                <Route path='/questions' element={ <Questionnaire /> } />
                <Route path='/userPage' element={ <UserPage /> } />
                <Route path='/journals' element={ <JournalContainer /> } />
                {/* 
                    This is a route to a stretch feature.
                    <Route path='/sleep-data' element={} /> 
                */}
            </Routes>
        </div>
    )
}

export default App;
