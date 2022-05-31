import React from 'react';
import { useState, useEffect } from 'react';
import ShipsFreeAppointmentService from '../../../services/ShipsFreeAppointmentService';
import '../../../Pages/ScheduleEntitys/ScheduleShips/PossibleShipAppointments.css';
import ShipsAppointmentService from '../../../services/ShipsAppointmentService';
import emailjs from 'emailjs-com';

const PossibleShipAppointments = () => {
    
    const [requiredShip, setRequiredShip] = useState({});
    const [requiredData, setRequiredData] = useState({});
    const [freeTermsForRequiredShip, setFreeTermsForRequiredShip] = useState([{}]);
    const [doesRequiredShipHaveFreeAppointments, setDoesRequiredHaveShipFreeAppointments] = useState('');
    const [allFreeTerms, setAllFreeTerms] = useState([{}]);
    const [activeUser, setActiveUser] = useState({});

    useEffect(() => {
        loadRequiredShip();
    }, [])

    const loadRequiredShip = () => {

        let required = JSON.parse(localStorage.getItem('requiredData'));
        setRequiredData(required);
        
        let ship = JSON.parse(localStorage.getItem('activeShip'))
        setRequiredShip(ship);

        let user = JSON.parse(localStorage.getItem('activeUser'))
        setActiveUser(user);
    }

    useEffect(() => {
        checkFreeTerms();
    },[requiredShip])

    const checkFreeTerms = async() => {

        let [freeAppointmentsForRequiredShip, freeAppointmentsForAllShipsForRequiredTime] = await Promise.all([ 
            ShipsFreeAppointmentService.findShipFreeAppointmentsByShipId(requiredShip.id),
            ShipsFreeAppointmentService.findAllFreeShipsAppointmentsForRequiredTime(requiredData.startingDate, requiredData.endingDate)
        ]);

        let freeAppointments = freeAppointmentsForRequiredShip.data;
        let goodAppointments =[]

        let allFreeAppointments = freeAppointmentsForAllShipsForRequiredTime.data;
        let allGoodAppointments = []

        freeAppointments.forEach(appointment => {
            if(appointment.startingDate <= requiredData.startingDate && appointment.endingDate >= requiredData.endingDate) {
                goodAppointments.push(appointment);
            }
        });

        allFreeAppointments.forEach(appointment => {
            if(appointment.shipId !== requiredShip.id) {
                allGoodAppointments.push(appointment);
            }
        });

        setFreeTermsForRequiredShip(goodAppointments);
        setAllFreeTerms(allGoodAppointments);
        
        if(goodAppointments.length === 0){
            setDoesRequiredHaveShipFreeAppointments(false)
        }
        else
            setDoesRequiredHaveShipFreeAppointments(true)
    }

    const schedule = (e, freeTerm) => {

        e.preventDefault();

        let appointment = {
            additionalServices: freeTerm.additionalServices,
            shipId: freeTerm.shipId,
            clientId: activeUser.id,
            endingDate: requiredData.endingDate,
            shipOwner: freeTerm.shipOwner,
            location: freeTerm.location,
            numberOfPeople: requiredData.numberOfPeople,
            price: freeTerm.price,
            startingDate: requiredData.startingDate
        }

        ShipsAppointmentService.createShipAppointment(appointment)

        
        var params = {}
        emailjs.send('service_5rghav8', 'template_h5b17px', params , 'gXf9s006PxRAmmhgz')
        .then((resoult) => {
                console.log(resoult.text)
                window.location.reload(false);                  
            }, (error) => {
                console.log(error.text)
            });

    }

    
    return (        
    <div className='possible-appointments-container'>
    <div className='required-ship-container' id='1'>
        <h3 name="message">Ship You Required</h3>
        {
            doesRequiredShipHaveFreeAppointments ?
            <div className='table-of-appointments'>
                <table className='required-ship-terms-list' >
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
                        { freeTermsForRequiredShip.map(
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
                Required ship doesn not have free terms in required time.
            </div>
        }
    </div>
    <div className='free-ships-list'>
        <h3>Other Ships Free Terms for Required time</h3>
        <table className='ship-terms-list' >
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

export default PossibleShipAppointments;
