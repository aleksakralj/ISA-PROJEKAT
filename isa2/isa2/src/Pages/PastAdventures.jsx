import React from 'react';
import '../Assets/Styles/PastAdventures.css'
import { useState, useEffect } from 'react';
import AdventuresHistoryServiceAPI from '../services/AdventuresHistoryServiceAPI';


const PastAdventures = () => {

    const [adventures, setAdventures] = useState([]);

    const loadAdventures = async() => {

        let loggedUser = JSON.parse(localStorage.getItem('activeUser'));

        let allAdventures = await AdventuresHistoryServiceAPI.getAdventureHistoryAppointmentByUserId(loggedUser.id)
       

        setAdventures(allAdventures.data);

        console.log(adventures);
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

                            <th>Action</th>
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
                            <td><button> AA</button></td>
                        </tr>

                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default PastAdventures;
