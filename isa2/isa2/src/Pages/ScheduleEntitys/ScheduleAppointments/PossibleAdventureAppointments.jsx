import React from 'react';
import { useState, useEffect } from 'react';
import AdventureFreeAppointmentsService from '../../../services/AdventureFreeAppointmentsService';
import '../../../Pages/ScheduleEntitys/ScheduleAppointments/PossibleAdventureAppointments.css'
import AdventureAppointmentsService from '../../../services/AdventureAppointmentsService';
import emailjs from 'emailjs-com'

const PossibleAdventureAppointments = () => {
    
    const [requiredAdventure, setRequiredAdventure] = useState({});
    const [requiredData, setRequiredData] = useState({});
    const [freeTermsForRequiredAdventure, setFreeTermsForRequiredAdventure] = useState([{}]);
    const [doesRequiredAdventureFreeAppointmentsExist, setDoesRequiredAdventureFreeAppointmentsExist] = useState('');
    const [allFreeTerms, setAllFreeTerms] = useState([{}]);
    const [activeUser, setActiveUser] = useState({});

    useEffect(() => {
        loadRequiredAdventure();
    }, [])

    const loadRequiredAdventure = () => {

        let required = JSON.parse(localStorage.getItem('requiredData'));
        setRequiredData(required);
        
        let adventure = JSON.parse(localStorage.getItem('activeAdventure'))
        setRequiredAdventure(adventure);

        let user = JSON.parse(localStorage.getItem('activeUser'))
        setActiveUser(user);
    }

    useEffect(() => {
        checkFreeTerms();
    },[requiredAdventure])

    const checkFreeTerms = async() => {

        let [freeAppointmentsForRequiredAdventure, freeAppointmentsForAllAdventuresForRequiredTime] = await Promise.all([ 
            AdventureFreeAppointmentsService.findAdventureFreeAppointmentsByAdventureId(requiredAdventure.id),
            AdventureFreeAppointmentsService.findAllFreeAdventureAppointmentsForRequiredTime(requiredData.startingDate, requiredData.endingDate)
        ]);

        let freeAppointments = freeAppointmentsForRequiredAdventure.data;
        let goodAppointments =[]

        let allFreeAppointments = freeAppointmentsForAllAdventuresForRequiredTime.data;
        let allGoodAppointments = []

        freeAppointments.forEach(appointment => {
            if(appointment.startingDate <= requiredData.startingDate && appointment.endingDate >= requiredData.endingDate) {
                goodAppointments.push(appointment);
            }
        });

        allFreeAppointments.forEach(appointment => {
            if(appointment.adventureId !== requiredAdventure.id) {
                allGoodAppointments.push(appointment);
            }
        });

        setFreeTermsForRequiredAdventure(goodAppointments);
        setAllFreeTerms(allGoodAppointments);
        
        if(goodAppointments.length === 0){
            setDoesRequiredAdventureFreeAppointmentsExist(false)
        }
        else
            setDoesRequiredAdventureFreeAppointmentsExist(true)
    }

    const schedule = (e, freeTerm) => {

        e.preventDefault();

        let appointment = {
            additionalServices: freeTerm.additionalServices,
            adventureId: freeTerm.adventureId,
            clientId: activeUser.id,
            endingDate: requiredData.endingDate,
            instructorId: freeTerm.instructorId,
            location: freeTerm.location,
            numberOfPeople: requiredData.numberOfPeople,
            price: freeTerm.price,
            startingDate: requiredData.startingDate
        }

        AdventureAppointmentsService.createAdventureAppointment(appointment);

        var params = {}
        emailjs.send('service_5rghav8', 'template_6avct9t', params , 'gXf9s006PxRAmmhgz')
        .then((resoult) => {
                console.log(resoult.text)
            }, (error) => {
                console.log(error.text)
            });
    }

    return (
        <div className='possible-appointments-container'>
            <div className='required-adventure-container' id='1'>
                <h3 name="message">Adventure You Required</h3>
                {
                    doesRequiredAdventureFreeAppointmentsExist ?
                    <div className='table-of-appointments'>
                        <table className='required-adventure-terms-list' >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Instructor</th>
                                    <th>Location</th>
                                    <th>Starting Time</th>
                                    <th>Ending Time</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { freeTermsForRequiredAdventure.map(
                                    freeTerm =>
                                <tr key={freeTerm.id}>
                                    <th></th>
                                    <th></th>
                                    <th>{freeTerm.location}</th>
                                    <th>{freeTerm.startingDate}</th>
                                    <th>{freeTerm.endingDate}</th>
                                    <th>{freeTerm.price}</th>
                                    <th> 
                                        <form onClick={(e)=> schedule(e,freeTerm)}>
                                            <button>Schedule</button>
                                        </form>
                                    </th>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div> :
                    <div className='required-terms-not-found-container'>
                        Required adventure doesn not have free terms in required time.
                    </div>
                }
            </div>
            <div className='free-adventures-list'>
                <h3>Other Adventures Free Terms for Required time</h3>
                <table className='adventure-terms-list' >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Location</th>
                            <th>Starting Time</th>
                            <th>Ending Time</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { allFreeTerms.map(
                            freeTerm =>
                        <tr key={freeTerm.id}>
                            <th></th>
                            <th></th>
                            <th>{freeTerm.location}</th>
                            <th>{freeTerm.startingDate}</th>
                            <th>{freeTerm.endingDate}</th>
                            <th>{freeTerm.price}</th>
                            <th>
                                <form>
                                    <button onClick={(e)=> schedule(e,freeTerm)}>Schedule
                                    </button>  
                              </form>
                            </th>
                                
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
    

}

export default PossibleAdventureAppointments;
