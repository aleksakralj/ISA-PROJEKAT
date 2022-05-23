import React from 'react';
import '../Assets/Styles/ClientAdventures.css'
import { useState, useEffect } from 'react';
import AdventureAppointmentsService from '../services/AdventureAppointmentsService';
import AdventureService from '../services/AdventureService';
import UserService from '../services/UserService';

const ClientAdventures = () => {
    
    const [adventures, setAdventures] = useState([]);
    const [instructorName, setInstructorName] = useState('');
    const [adventureName, setAdventureName] = useState('');
    const [adventureAddress, setAdventureAddress] = useState('');

    const getAddress = async(id) => {

        let adventure = await AdventureService.getAdventureById(id)
        setAdventureAddress(adventure.data.address);
    }

    const getName = async(id) => {

        let adventure = await AdventureService.getAdventureById(id)
        setAdventureName(adventure.data.name);
    }

    
    
    const getInstructorsName = async(id) => {
        
        let adventure =  await AdventureService.getAdventureById(id)
        let instructor = await UserService.getUserById(adventure.data.instructorId);

        setInstructorName(instructor.data.firstName);
    }

    const getAdventureAddress = (adventureId) =>{
        
        getAddress(adventureId);
        return adventureAddress;
    }

    const getAdventureName = (adventureId) => {
        
        getName(adventureId);
        return adventureName;
    }


    const getFisgingInstructorsName = (adventureId) => {
        
        getInstructorsName(adventureId);
        return instructorName
    }


    const loadAdventures =  async() => {

        let loggedUser = JSON.parse(localStorage.getItem('activeUser'));
        let usersAdventures = await AdventureAppointmentsService.getAdventureAppointmentsForSpecificUser(loggedUser.id);
        let nesto = usersAdventures.data;

        console.log( 'nestoo ',nesto);
        
        setAdventures(nesto);
        console.log('avantura ',adventures);
    }

    useEffect(() => {

        loadAdventures()
    },[])

    return ( 
    
    <div className='adventures-container'>
            
        
            <div className='head-search-container'>
                <h2 className='header'>Adventures</h2>
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
                            <td>{}</td>
                            <td>{}</td>
                            <td>{}</td>
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

export default ClientAdventures;
