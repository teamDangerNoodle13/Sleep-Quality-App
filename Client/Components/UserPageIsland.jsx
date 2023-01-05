import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import { VscNotebook } from 'react-icons/vsc';


const UserPageIsland = (props) => {
    return (
        <div>
            <Link to="/home/journals">
            <div className="userPageJournal">
                {/* <VscNotebook> */}
                <div>Go to Journal</div>
            </div>
            </Link>

            <div className= "userPageResAndScore">
                Sleep Score: {props.sum}
                <div>
                    Response:
                </div> 
            </div>
            <h2>Resources</h2>
            <div className="userPageResources">
                Resources
            </div>

        </div>
    )
}

export default UserPageIsland;