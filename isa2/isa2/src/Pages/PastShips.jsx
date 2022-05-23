import React from 'react';
import { useState, useEffect } from 'react';
import '../Assets/Styles/PastShipsAppointment.css'
import PastShipsAppointmentAPI from '../services/PastShipsAppointmentAPI';

const PastShips = () => {

    const [ships, setShips] = useState([]);

    const loadShips = async() => {

        let loggedUser = JSON.parse(localStorage.getItem('activeUser'));
        let thisUserShipsAppointmentsHistory = await PastShipsAppointmentAPI.getShipHistoryAppointmentByUserId(loggedUser.id);
        setShips(thisUserShipsAppointmentsHistory.data);
    }

    useEffect(() => {
        loadShips();
    },[])

    return (
        <div className='past-ships-container'>
            
        
        <div className='head-search-container'>
            <h2 className='header'>Past ships</h2>
            <div className='search-container'>
                <input ></input>
                <button className='button'>Search</button>
            </div>
        </div>

        <div className='table-of-ships'>
            <table className='ships-table'>
                <thead>
                    <tr>
                        <th>Starting date</th>
                        <th>Ending date</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Ship owner</th>
                        <th>Price</th>

                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                  {
                      ships.map(
                        ship =>
                    <tr key={ship.id}>
                        <td>{ship.startingDate}</td>
                        <td>{ship.endingDate}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{ship.price}</td>                            
                        <td><button> AA</button></td>
                    </tr>
                    )}  
                </tbody>
            </table>
        </div>
    </div>

    );
}

export default PastShips;
