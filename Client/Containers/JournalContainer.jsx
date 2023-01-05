import React, { useEffect, useState } from "react";

import Entry from "../Components/Entry.jsx";
import Navigation  from "../Containers/Navigation.jsx";
import JournalEntries from "../Components/JournalEntries.jsx";
import NewJournal from "../Components/NewJournal.jsx";
import UserContext from "./UserContext.jsx";

class JournalContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            entries: []
        };

        this.makeEntries = this.makeEntries.bind(this);
    }

    componentDidMount(prevProps, prevState) {
        let value = this.context;
            fetch('http://localhost:3000/journals?' + new URLSearchParams({
                user: value.user.id
            }))
            .then((response) => response.json())
            .then(data => {
                console.log('data returned in Journal Container is an array: ' + Array.isArray(data));
                this.setState({ entries: data });
            })
    }

    componentDidUpdate(prevProps, prevState) {
        let value = this.context;
        if(this.state.entries !== prevState.entries) {
            fetch('http://localhost:3000/journals?' + new URLSearchParams({
                user: value.user.id
            }))
            .then((response) => response.json())
            .then(data => {
                this.setState({ entries: data });    
            })
        }
    }

    // useEffect( () => {
    //     fetch('http://localhost:3000/journals?' + new URLSearchParams({
    //         user: '63b3234df79c9575703ac220'
    //     }))
    //     .then((response) => response.json())
    //     .then(data => {
    //         setEntries(data);
    //     })
    // }, [entries, setEntries])

    // const journalEntries = entries.reverse().map((entry) => {
    //     return (
    //         <Entry 
    //             key={entry.id}
    //             entry={entry.entry} 
    //             date={entry.createdAt} 
    //             handleDelete={handleDelete} 
    //             handleUpdate={handleUpdate} 
    //         />
    //     )
    // })

    makeEntries() {
        let value = this.context;
        const entries = this.state.entries.reverse().map((entry) => {
            return (
                <Entry 
                key={entry.id}
                entry={entry.entry} 
                date={entry.createdAt} 
                />
            )
        });
        return entries;
    }

    render() {
        let value = this.context;
        const entryElements = this.makeEntries();
        return (
            <div className="journal-container">
                <Navigation />
                <NewJournal userId={value.user.id}/>
                <JournalEntries entries={entryElements}/>
            </div>
        )
    }
}

JournalContainer.contextType = UserContext;

export default JournalContainer;

    /* <Entry id={'63b335c2282b3680d473ef26'}
    entry={'entry string here'}
    date={'2023-01-02T19:51:30.092Z'} /> */
