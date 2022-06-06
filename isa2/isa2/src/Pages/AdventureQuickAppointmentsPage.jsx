import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import '../Assets/Styles/AdventureQuickAppointments.css'
import AdventureAppointmentsService from '../services/AdventureAppointmentsService';

const AdventureQuickAppointmentsPage = () => {
    
    const [quickAppointments, setQuickAppointments] = useState([]);
    const [adventure, setAdventure] = useState({});
    const [activeUser, setActiveUser] = useState({});

    const loadData = () => {

        let adventurePom = JSON.parse(localStorage.getItem('activeAdventure'));
        setAdventure(adventurePom);
    
        let user = JSON.parse(localStorage.getItem('activeUser'));
        setActiveUser(user);
    }

    const loadQuickAppointments = async() => {
        
        let response = await axios.get("http://localhost:8080/api/v1/adventurequickappointments/adventure/" + adventure.id)
        setQuickAppointments(response.data)
    }

    const scheduleQuickAppointment = (appointment) => {

        let clientsNewAppointment = { 
            adventureId : appointment.adventureId,
            instructorId : appointment.instructorId,
            clientId: activeUser.id,
            location: appointment.location,
            startingDate: appointment.startingDate,
            endingDate: appointment.endingDate,
            numberOfPeople: appointment.numberOfPeople,
            additionalServices: appointment.additionalServices,
            price: appointment.price 
        }
        
        AdventureAppointmentsService.createAdventureAppointment(clientsNewAppointment);
        console.log('Do ovde sam dosao')

        axios.delete("http://localhost:8080/api/v1/adventurequickappointments/" + appointment.id)
    }   

    useEffect(() => {
        loadData();
    }, [])

    useEffect(() => {
        loadQuickAppointments();
    }, [adventure])
    
    return (
        <div className='adventure-quick-appointment-container'>
            <div className='app-header'>
                <h2>{adventure.name} quick appointments</h2>
            </div>
            <table className='adventure-appointments-table'>
                <thead>
                    <tr>
                        <th>Instuctor name</th>
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

export default AdventureQuickAppointmentsPage;
