import React from 'react';
import '../Assets/Styles/PastAdventures.css'
import { useState, useEffect } from 'react';
import AdventuresHistoryServiceAPI from '../services/AdventuresHistoryServiceAPI';
import {useHistory} from 'react-router-dom'

const PastAdventures = () => {

    const [adventures, setAdventures] = useState([]);
    const history = useHistory();
    const [adventureChoosenForFeedback, setAdventureChoosenForFeedback] = useState({});

    const loadAdventures = async() => {

        let loggedUser = JSON.parse(localStorage.getItem('activeUser'));
        let allAdventures = await AdventuresHistoryServiceAPI.getAdventureHistoryAppointmentByUserId(loggedUser.id)
       
        setAdventures(allAdventures.data);
    }

    const openFeedbackPage = (adventure) => {
        
        setAdventureChoosenForFeedback(adventure)
        localStorage.setItem('activeEntity', JSON.stringify(adventure))
        localStorage.setItem('isAdventure', true);
        history.push('/adventure-write-feedback/' + adventure.id);
   
    }

    useEffect(() =>{
        loadAdventures();
    },[])

    return (
        <div className='past-adventures-container'>
            <div className='head-search-container'>
                <h2 className='header'>Past Adventures</h2>
                <div className='search-container'>
                    <input ></input>
                    <button className='button'>Search</button>
                </div>
            </div>

            <div className='table-of-adventures'>
                <table className='adventures-table'>
                    <thead>
                        <tr>
                            <th>Starting date</th>
                            <th>Ending date</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Fishing instructor</th>
                            <th>Price</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            adventures.map(
                                adventure => 
                            
                        <tr key={adventure.id}>
                            <td>{adventure.startingDate}</td>
                            <td>{adventure.endingDate}</td>
                            <td>{null}</td>
                            <td>{null}</td>
                            <td>{null}</td>
                            <td>{adventure.price}</td>                            
                            <td><button onClick={() => openFeedbackPage(adventure)}> Send your feedback</button></td>
                        </tr>

                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default PastAdventures;
