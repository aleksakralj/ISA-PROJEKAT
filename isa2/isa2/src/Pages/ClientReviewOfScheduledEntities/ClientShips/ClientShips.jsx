import React from 'react';
import '../../../Pages/ClientReviewOfScheduledEntities/ClientShips/ClientShips.css'
import { useState, useEffect } from 'react';
import ShipsAppointmentService from '../../../services/ShipsAppointmentService';
import ShipService from '../../../services/ShipService';
import UserService from '../../../services/UserService';

const ClientShips = () => {
    const [scheduledShips, setScheduledShips] = useState([{}]);
    const [shipObjects, setShipObjects] = useState([{}]);
    const [userObjects, setUserObjects] = useState([{}]);
    const [showAShipAppointments, setShowShipAppointments] = useState([{}]);

    const loadShips =  async() => {

        let loggedUser = JSON.parse(localStorage.getItem('activeUser'));
        let usersShips = await ShipsAppointmentService.getShipAppointmentsForSpecificUser(loggedUser.id);
     
        setScheduledShips(usersShips.data);
    
    }

    useEffect(() => {
        loadShips()
    },[])

    useEffect(() => {
        getShipObject();
    },[scheduledShips])

    const getShipObject = async() => {

        let shipDTO = []

        for (const ship of scheduledShips) {
            let s = await ShipService.getShipById(ship.shipId)
            shipDTO.push(s.data);
        }
        

        setShipObjects(shipDTO)

    }

    useEffect(() => {
        getUserObjects();
    }, [shipObjects])

    const getUserObjects = async() => {

        let userDTO = []
        for(const ship of shipObjects){
            let u = await UserService.getUserById(ship.ownerId)
   
            userDTO.push(u.data);
        
        }

        setUserObjects(userDTO);
    }   

    useEffect(() => {
        bindData();
    }, [userObjects])

    const bindData = () => {

        let finalShips = []

        for (let i = 0; i<scheduledShips.length; i++) {

            let object = {
                id: scheduledShips[i].id,
                startingDate: scheduledShips[i].startingDate,
                endingDate: scheduledShips[i].startingDate,
                adventureName: shipObjects[i].name,
                address: scheduledShips[i].location,
                instructorName: userObjects[i].firstName,
                price : scheduledShips[i].price
            }

            finalShips.push(object);
        }

        setShowShipAppointments(finalShips);
    }


    return ( 
    
    <div className='ships-container'>
            <div className='head-search-container'>
                <h2 className='header'>Ships</h2>
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
                            <th>Ship Owner</th>
                            <th>Price</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                        showAShipAppointments.map(
                            ship =>
                        <tr key={ship.id}>
                            <td>{ship.startingDate}</td>
                            <td>{ship.endingDate}</td>
                            <td>{ship.adventureName}</td>
                            <td>{ship.address}</td>
                            <td>{ship.instructorName}</td>
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


export default ClientShips;
