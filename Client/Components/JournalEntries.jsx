//accept props - entries array, and render
import React, {useEffect, useState} from 'react';



const JournalEntries = (props) => {
    return (
      <div>
        {props.entries}
      </div>
    )
}

export default JournalEntries;