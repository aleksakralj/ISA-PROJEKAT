import React from 'react';
import '../Assets/Styles/ClientAdventures.css'
import { useState, useEffect } from 'react';
import AdventureAppointmentsService from '../services/AdventureAppointmentsService';
import AdventureService from '../services/AdventureService';
import UserService from '../services/UserService';
import {getCurrentDate} from '../Utils/CurrentDate'

const ClientAdventures = () => {
    
    const [scheduledAdventures, setScheduledAdventures] = useState([{}]);
    const [adventureObjects, setAdventureObjects] = useState([{}]);
    const [userObjects, setUserObjects] = useState([{}]);
    const [showAdventureAppointments, setShowAdventureAppointments] = useState([{}]);

    const loadAdventures =  async() => {

        let loggedUser = JSON.parse(localStorage.getItem('activeUser'));
        let usersAdventures = await AdventureAppointmentsService.getAdventureAppointmentsForSpecificUser(loggedUser.id);
     
        setScheduledAdventures(usersAdventures.data);
    
    }

    useEffect(() => {
        loadAdventures()
    },[])

    useEffect(() => {
        getAdventureObject();
    },[scheduledAdventures])

    const getAdventureObject = async() => {

        let adventureDTO = []

        for (const adventure of scheduledAdventures) {
            let a = await AdventureService.getAdventureById(adventure.adventureId)
            adventureDTO.push(a.data);
        }
        

        setAdventureObjects(adventureDTO)

    }

    useEffect(() => {
        getUserObjects();
    }, [adventureObjects])

    const getUserObjects = async() => {

        let userDTO = []
        for(const adventure of adventureObjects){
            let u = await UserService.getUserById(adventure.instructorId)
   
            userDTO.push(u.data);
        
        }

        setUserObjects(userDTO);
    }   

    useEffect(() => {
        bindData();
    }, [userObjects])

    const bindData = () => {

        let finalAdventures = []

        for (let i = 0; i<scheduledAdventures.length; i++) {

            let object = {
                id: scheduledAdventures[i].id,
                startingDate: scheduledAdventures[i].startingDate,
                endingDate: scheduledAdventures[i].endingDate,
                adventureName: adventureObjects[i].name,
                address: scheduledAdventures[i].location,
                instructorName: userObjects[i].firstName,
                price : scheduledAdventures[i].price
            }

            finalAdventures.push(object);
        }

        setShowAdventureAppointments(finalAdventures);
    }

    const cancelAdventure = (adventureToCancel) => {
        
        const adventureDate = new Date(adventureToCancel.startingDate);
        const currentDate = new Date(getCurrentDate());

        if (adventureDate - currentDate > 3) {
            AdventureAppointmentsService.deleteAdventureAppointment(adventureToCancel.id)
            alert('You successfully deleted adventure appointment!');
            window.location.reload(false);                 
        }

        else (
            alert('You cant cancel this appointment, there is less then 3 days until it!')
        )
    }

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

                        showAdventureAppointments.map(
                            adventure =>
                        <tr key={adventure.id}>
                            <td>{adventure.startingDate}</td>
                            <td>{adventure.endingDate}</td>
                            <td>{adventure.adventureName}</td>
                            <td>{adventure.address}</td>
                            <td>{adventure.instructorName}</td>
                            <td>{adventure.price}</td>                            
                            <td><button onClick={() => cancelAdventure(adventure)}> Cancel Adventure</button></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ClientAdventures;
