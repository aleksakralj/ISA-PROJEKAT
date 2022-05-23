import React from 'react';
import CottagesHistoryAppointmentsAPI from '../services/CottagesHistoryAppointmentsAPI';
import { useState, useEffect } from 'react';
import '../Assets/Styles/PastCottages.css'

const PastCottages = () => {
    const [cottages, setCottages] = useState([]);

    const loadCottages = async() => {

        let loggedUser = JSON.parse(localStorage.getItem('activeUser'));
        let allCottages = await CottagesHistoryAppointmentsAPI.getCottageHistoryAppointmentByUserId(loggedUser.id)
        setCottages(allCottages.data);
    }

    useEffect(() =>{
        loadCottages();
    },[])

    return (
        <div className='past-cottages-container'>
            <div className='head-search-container'>
                <h2 className='header'>Past Cottages</h2>
                <div className='search-container'>
                    <input ></input>
                    <button className='button'>Search</button>
                </div>
            </div>

            <div className='table-of-cottages'>
                <table className='cottages-table'>
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
                            cottages.map(
                                cottage => 
                            
                        <tr key={cottage.id}>
                            <td>{cottage.startingDate}</td>
                            <td>{cottage.endingDate}</td>
                            <td>{null}</td>
                            <td>{null}</td>
                            <td>{null}</td>
                            <td>{cottage.price}</td>                            
                            <td><button> AA</button></td>
                        </tr>

                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
}


export default PastCottages;