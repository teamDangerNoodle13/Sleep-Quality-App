import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import { VscNotebook } from 'react-icons/vsc';


const UserPageIsland = () => {
    return (
        <div>
            <Link to="/home/journals">
            <div className="userPageJournal">
                {/* <VscNotebook> */}
                <div>Go to Journal</div>
            </div>
            </Link>
            <div className= "userPageResAndScore">
                <span>Response</span>
                <span>Sleep Score</span>
            </div>
            <div>Resources</div>
        </div>
    )
}

export default UserPageIsland;