import React from 'react';
import '../../../Pages/ScheduleEntitys/ScheduleCottages/ScheduleCottages.css'
import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom'

const ScheduleCottagesPage = () => {
    
    const [activeCottage, setActiveCottage] = useState({});
    const [startingDate, setStartingDate] = useState('');
    const [endingDate, setEndingDate] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(0);
    const history = useHistory();

    useEffect(()=> {
        loadCottageData();
    }, [])

    const loadCottageData = () => {
        let cottage = JSON.parse(localStorage.getItem('activeCottage'));
        setActiveCottage(cottage); 
    }

    const openPosibleAppointments = () => {
        
        let requiredData = {startingDate: startingDate, endingDate: endingDate, numberOfGuests: numberOfGuests}

        localStorage.setItem('requiredData', JSON.stringify(requiredData));
        console.log(requiredData)

        history.push('/possible-cottage-appointments');

    }
    
    return (
        <div className='schedule-cottage-appointment-container'>
        <div className='appointment-propery-selector-box'>
            <h2 className='caption'>Please schedule your appointment</h2>
            <div className='appointment-data'>
                <div className='input-field'>
                    <label className='labels'>Cottage name:</label>
                    <input 
                        className='inputs' 
                        value={activeCottage.name}
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
                        max={activeCottage.maxPeople}
                        ></input>
                </div>
            </div>
            <button className='schedule-button' onClick={()=> openPosibleAppointments()}>Schedule</button>
        </div>
    </div>

    );
}

export default ScheduleCottagesPage;
