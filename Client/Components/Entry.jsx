import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Entry(props) {

    // const newDate = new Date(date);
    // const options = {
    //     year: 'numeric',
    //     month: 'numeric',
    //     day: 'numeric',
    //     hour: 'numeric',
    //     minute: 'numeric',
    //     // timeZoneName: 'short'
    //   };
      
    //   const formatter = new Intl.DateTimeFormat('en-US', options);
    //   const formattedDate = formatter.format(newDate);

    return (
        <div className="journal-entry" key={props.key}>
            <p className="journal-date">{props.date}</p> 
            <p className="journal-text">{props.entry}</p>
            {/* <div className="button-container">
                <button className="delete-button" key={key} onClick={handleDelete}> DELETE </button>
                <button className="update-button" onClick={handleUpdate}> UPDATE </button>
            </div> */}

        </div>
    )
}

export default Entry;