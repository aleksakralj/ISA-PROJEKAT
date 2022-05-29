import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import CottageAppointmentsService from '../services/CottageAppointmentsService';
import '../Assets/Styles/CottagesQuickAppointments.css';

const CottagesQuickAppointmentsPage = () => {
    
    const [quickAppointments, setQuickAppointments] = useState([]);
    const [cottage, setCottage] = useState({});
    const [activeUser, setActiveUser] = useState({});

    const loadData = () => {

        let cottagePom = JSON.parse(localStorage.getItem('activeCottage'));
        setCottage(cottagePom)

        let user = JSON.parse(localStorage.getItem('activeUser'));
        setActiveUser(user);
    }

    const loadQuickAppointments = async() => {
        
        let response = await axios.get("http://localhost:8080/api/v1/cottagequickappointments/cottage/" + cottage.id)
        setQuickAppointments(response.data)
    }

    const scheduleQuickAppointment = (appointment) => {

        let clientsNewAppointment = { 
            cottageId : appointment.cottageId,
            ownerId : appointment.ownerId,
            clientId: activeUser.id,
            location: appointment.location,
            startingDate: appointment.startingDate,
            endingDate: appointment.endingDate,
            numberOfPeople: appointment.numberOfPeople,
            additionalServices: appointment.additionalServices,
            price: appointment.price 
        }
        
        CottageAppointmentsService.createCottageAppointment(clientsNewAppointment);
        console.log('Do ovde sam dosao')
    }   

    useEffect(() => {
        loadData();
    }, [])

    useEffect(() => {
        loadQuickAppointments();
    }, [cottage])
    
    return (
        <div className='cottage-quick-appointment-container'>
            <div className='app-header'>
                <h2>Cottage_Name quick appointments</h2>
            </div>
            <table className='cottage-appointments-table'>
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

export default CottagesQuickAppointmentsPage;
