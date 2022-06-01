import React from 'react';
import { useState, useEffect } from 'react';
import '../Assets/Styles/PastShipsAppointment.css'
import PastShipsAppointmentAPI from '../services/PastShipsAppointmentAPI';
import {useHistory} from 'react-router-dom';
import ShipService from '../services/ShipService';
import UserService from '../services/UserService';

const PastShips = () => {

    const [ships, setShips] = useState([]);
    const [shipChoosenForFeedback, setShipChoosenForFeedback] = useState({});
    const history = useHistory();
    const [shipObjects, setshipObjects] = useState([{}]);
    const [userObjects, setuserObjects] = useState([{}]);
    const [activeUser, setactiveUser] = useState({});
    const [shownHistoryShips, setshownHistoryShips] = useState([{}]);

    
    useEffect(() =>{
        loadActiveUser();
    },[])

    const loadActiveUser = () => {
        setactiveUser( JSON.parse(localStorage.getItem('activeUser')));
    }

    useEffect (() => {
        loadShips();
    }, [activeUser])


    const loadShips = async() => {
        let thisUserShipsAppointmentsHistory = await PastShipsAppointmentAPI.getShipHistoryAppointmentByUserId(activeUser.id);
        setShips(thisUserShipsAppointmentsHistory.data);
    }

    useEffect (() => {
        getShipObjects();
    }, [ships])

    const getShipObjects = async() => {

        let shipDTO = []
        for (const s of ships) {
            let responese = await ShipService.getShipById(s.shipId)
            shipDTO.push(responese.data);
        }

        setshipObjects(shipDTO);
    }

    useEffect(() => {
        getUserObjects()
    }, [shipObjects])

    const getUserObjects = async() => {

        let userDto = []
        for (const ship of shipObjects) {
            let s = await UserService.getUserById(ship.ownerId);
            userDto.push(s.data)
        }

        setuserObjects(userDto)
        console.log(userObjects)
    }

    useEffect(() => {
        bindData();
    }, [userObjects])

    const bindData = () => {
        
        let finalShips = []
        for (let i = 0 ; i<ships.length ; i++) {
            let object = {
                id: ships[i].id,
                startingDate: ships[i].startingDate,
                endingDate: ships[i].endingDate,
                name : shipObjects[i].name,
                ownerName : userObjects[i].firstName,
                location: shipObjects[i].address,
                price : ships[i].price
            }
            finalShips.push(object)
        }

        setshownHistoryShips(finalShips);
    }
    

    const openFeedbackPage = (ship) => {
        
        setShipChoosenForFeedback(ship)
        localStorage.setItem('activeEntity', JSON.stringify(ship))
        localStorage.setItem('isShip', true);
        history.push('/ship-write-feedback/' + ship.id);
    }



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
                      shownHistoryShips.map(
                        ship =>
                    <tr key={ship.id}>
                        <td>{ship.startingDate}</td>
                        <td>{ship.endingDate}</td>
                        <td>{ship.name}</td>
                        <td>{ship.location}</td>
                        <td>{ship.ownerName}</td>
                        <td>{ship.price}</td>                            
                        <td><button onClick={() => openFeedbackPage(ship)}> Send your feedback</button></td>
                    </tr>
                    )}  
                </tbody>
            </table>
        </div>
    </div>

    );
}

export default PastShips;
