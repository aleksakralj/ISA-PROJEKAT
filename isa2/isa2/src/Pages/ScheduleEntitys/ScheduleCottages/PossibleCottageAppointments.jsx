import React from 'react';
import { useState, useEffect } from 'react';
import CottageFreeAppointmentsService from '../../../services/CottageFreeAppointmentsService';
import CottageAppointmentsService from '../../../services/CottageAppointmentsService';
import emailjs from 'emailjs-com';
import '../../../Pages/ScheduleEntitys/ScheduleCottages/PossibleCottageAppointments.css';
import ClientPointsService from '../../../services/ClientPointsService';

const PossibleCottageAppointments = () => {
    const [requiredCottage, setRequiredCottage] = useState({});
    const [requiredData, setRequiredData] = useState({});
    const [freeTermsForRequiredCottage, setFreeTermsForRequiredCottage] = useState([{}]);
    const [doesRequiredCottageHaveFreeAppointments, setDoesRequiredCottageHaveFreeAppointments] = useState('');
    const [allFreeTerms, setAllFreeTerms] = useState([{}]);
    const [activeUser, setActiveUser] = useState({});
    const [userPoints, setuserPoints] = useState({});

    useEffect(() => {
        loadRequiredCottage();
    }, [])

    const loadRequiredCottage = () => {

        let required = JSON.parse(localStorage.getItem('requiredData'));
        setRequiredData(required);
        
        let cottage = JSON.parse(localStorage.getItem('activeCottage'))
        setRequiredCottage(cottage);

        let user = JSON.parse(localStorage.getItem('activeUser'))
        setActiveUser(user);
    }

    useEffect(() => {
        checkFreeTerms();
    },[requiredCottage])

    const checkFreeTerms = async() => {

        let [freeAppointmentsForRequiredCottage, freeAppointmentsForAllCottagesForRequiredTime] = await Promise.all([    
            CottageFreeAppointmentsService.findCottageFreeAppointmentsByCottageId(requiredCottage.id),
            CottageFreeAppointmentsService.findAllFreeCottageAppointmentsForRequiredTime(requiredData.startingDate, requiredData.endingDate )
        ]);

        let freeAppointments = freeAppointmentsForRequiredCottage.data;
        let goodAppointments =[]

        let allFreeAppointments = freeAppointmentsForAllCottagesForRequiredTime.data;
        let allGoodAppointments = []

        freeAppointments.forEach(appointment => {
            if(appointment.startingDate <= requiredData.startingDate && appointment.endingDate >= requiredData.endingDate) {
                goodAppointments.push(appointment);
            }
        });

        allFreeAppointments.forEach(appointment => {
            if(appointment.cottageId !== requiredCottage.id) {
                allGoodAppointments.push(appointment);
            }
        });

        setFreeTermsForRequiredCottage(goodAppointments);
        setAllFreeTerms(allGoodAppointments);
        
        if(goodAppointments.length === 0){
            setDoesRequiredCottageHaveFreeAppointments(false)
        }
        else
            setDoesRequiredCottageHaveFreeAppointments(true)
    }

    const schedule = (e, freeTerm) => {

        e.preventDefault();

        let appointment = {
            additionalServices: freeTerm.additionalServices,
            cottageId: freeTerm.cottageId,
            clientId: activeUser.id,
            endingDate: requiredData.endingDate,
            ownerId: freeTerm.ownerId,
            location: freeTerm.location,
            numberOfPeople: requiredData.numberOfPeople,
            price: freeTerm.price,
            startingDate: requiredData.startingDate
        }

        CottageAppointmentsService.createCottageAppointment(appointment);
        updatePoints();
        alert("You successfully scheduled appointment")
        
        var params = {}
        emailjs.send('service_5rghav8', 'template_6avct9t', params , 'gXf9s006PxRAmmhgz')
        .then((resoult) => {
                console.log(resoult.text)
                window.location.reload(false);            
      
            }, (error) => {
                console.log(error.text)
            });
  
    }

    const updatePoints = () => {
        let points = 100;
        ClientPointsService.updateClientPoints(points, activeUser.id);
     }


    return (
        <div className='possible-appointments-container'>
            <div className='required-cottage-container' id='1'>
                <h3 name="message">Cottage You Required</h3>
                {
                    doesRequiredCottageHaveFreeAppointments ?
                    <div className='table-of-appointments'>
                        <table className='required-cottage-terms-list' >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Owner</th>
                                    <th>Location</th>
                                    <th>Starting Time</th>
                                    <th>Ending Time</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { freeTermsForRequiredCottage.map(
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
                        Required cottage doesn not have free terms in required time.
                    </div>
                }
            </div>
            <div className='free-cottages-list'>
                <h3>Other Cottage Free Terms for Required time</h3>
                <table className='cottage-terms-list' >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Owner</th>
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

export default PossibleCottageAppointments;
