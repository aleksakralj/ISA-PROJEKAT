import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../Assets/Styles/ShipQuickAppointments.css'
import ShipsAppointmentService from '../services/ShipsAppointmentService';

const ShipQuickAppointmentsPage = () => {
    const [quickAppointments, setQuickAppointments] = useState([]);
    const [ship, setShip] = useState({});
    const [activeUser, setActiveUser] = useState({});

    const loadData = () => {

        let shipPom = JSON.parse(localStorage.getItem('activeShip'));
        setShip(shipPom);
    
        let user = JSON.parse(localStorage.getItem('activeUser'));
        setActiveUser(user);
    }

    const loadQuickAppointments = async() => {
        
        let response = await axios.get("http://localhost:8080/api/v1/shipquickappointments/ship/" + ship.id)
        setQuickAppointments(response.data)
    }

    const scheduleQuickAppointment = (appointment) => {

        let clientsNewAppointment = { 
            shipId : appointment.shipId,
            ownerId : appointment.ownerId,
            clientId: activeUser.id,
            location: appointment.location,
            startingDate: appointment.startingDate,
            endingDate: appointment.endingDate,
            numberOfPeople: appointment.numberOfPeople,
            additionalServices: appointment.additionalServices,
            price: appointment.price 
        }
        
        ShipsAppointmentService.createShipAppointment(clientsNewAppointment);
        console.log('Do ovde sam dosao')
    }   

    useEffect(() => {
        loadData();
    }, [])

    useEffect(() => {
        loadQuickAppointments();
    }, [ship])
    
    return (
        <div className='ship-quick-appointment-container'>
            <div className='app-header'>
                <h2>Ship_name quick appointments</h2>
            </div>
            <table className='ship-appointments-table'>
                <thead>
                    <tr>
                        <th>Owner name</th>
                        <th>Starting date</th>
                        <th>Ending date</th>
                        <th>Location</th>
                        <th>Number of people</th>
                        <th>Additional services</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        quickAppointments.map(
                            appointment =>
                        
                    <tr key={appointment.id}>
                        <td>Ime jebeno</td>
                        <td>{appointment.startingDate}</td>
                        <td>{appointment.endingDate}</td>
                        <td>{appointment.location}</td>
                        <td>{appointment.numberOfPeople}</td>
                        <td>{appointment.additionalServices}</td>
                        <td>{appointment.price}</td>
                        <td>
                            <button onClick={() => scheduleQuickAppointment(appointment)}>Schedule</button>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>

        </div>
    );
}


export default ShipQuickAppointmentsPage;
