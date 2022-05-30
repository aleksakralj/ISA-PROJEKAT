import React from 'react';
import '../../../Pages/ScheduleEntitys/ScheduleAppointments/ScheduleAppointments.css'
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

const ScheduleAppointmentsPage = () => {
    
    const [activeAdventure, setActiveAdventure] = useState({});
    const [startingDate, setStartingDate] = useState('');
    const [endingDate, setEndingDate] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(0);
    const history = useHistory();

    useEffect(()=> {
        loadAdventureData();
    }, [])

    const loadAdventureData = () => {
        let adventure = JSON.parse(localStorage.getItem('activeAdventure'));
        setActiveAdventure(adventure); 
    }

    const openPosibleAppointments = () => {
        
        let requiredData = {startingDate: startingDate, endingDate: endingDate, numberOfGuests: numberOfGuests}

        localStorage.setItem('requiredData', JSON.stringify(requiredData));
        console.log(requiredData)

        history.push('/possible-adventure-appointments');

    }

    return (
        <div className='schedule-adventure-appointment-container'>
            <div className='appointment-propery-selector-box'>
                <h2 className='caption'>Please schedule your appointment</h2>
                <div className='appointment-data'>
                    <div className='input-field'>
                        <label className='labels'>Adventure name:</label>
                        <input 
                            className='inputs' 
                            value={activeAdventure.name}
                            contentEditable='false'
                        ></input>
                    </div>
                    <div className='input-field'>
                        <label className='labels'>Choose starting date</label>
                        <input 
                            className='inputs' 
                            type='date'
                            value={startingDate}
                            onChange={(e) =>
                                setStartingDate(e.target.value)
                            }></input>
                    </div>
                    <div className='input-field'>
                        <label className='labels'>Choose ending date</label>
                        <input  
                            className='inputs' 
                            type='date'
                            value={endingDate}
                            onChange={(e) =>
                                setEndingDate(e.target.value)
                            }></input>
                    </div>
                    <div className='input-field'> 
                        <label className='labels'>Number of Guests</label>
                        <input 
                            className='inputs' 
                            type='number'
                            value={numberOfGuests}
                            onChange={(e) => 
                                setNumberOfGuests(e.target.value)
                            }
                            min='0'
                            max={activeAdventure.maxPeople}
                            ></input>
                    </div>
                </div>
                <button className='schedule-button' onClick={()=> openPosibleAppointments()}>Schedule</button>
            </div>
        </div>
    );
}

export default ScheduleAppointmentsPage;
