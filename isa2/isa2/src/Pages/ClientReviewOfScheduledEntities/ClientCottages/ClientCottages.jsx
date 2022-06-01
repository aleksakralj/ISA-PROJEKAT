import React from 'react';
import '../../../Pages/ClientReviewOfScheduledEntities/ClientCottages/ClientCottages.css'
import { useEffect, useState } from 'react';
import CottageAppointmentsService from '../../../services/CottageAppointmentsService';
import CottageService from '../../../services/CottageService';
import UserService from '../../../services/UserService';
import { getCurrentDate } from '../../../Utils/CurrentDate';

const ClientCottages = () => {
    const [scheduledCottages, setScheduledCottages] = useState([{}]);
    const [cottageObjects, setCottageObjects] = useState([{}]);
    const [userObjects, setUserObjects] = useState([{}]);
    const [showCottageAppointments, setShowCottageAppointments] = useState([{}]);

    const loadCottages =  async() => {

        let loggedUser = JSON.parse(localStorage.getItem('activeUser'));
        let usersCottages = await CottageAppointmentsService.getCottageAppointmentsForSpecificUser(loggedUser.id);
     
        setScheduledCottages(usersCottages.data);
    
    }

    useEffect(() => {
        loadCottages()
    },[])

    useEffect(() => {
        getCottageObjects();
    },[scheduledCottages])

    const getCottageObjects = async() => {

        let cottageDTO = []

        for (const cottage of scheduledCottages) {
            let c = await CottageService.getCottageById(cottage.cottageId)
            cottageDTO.push(c.data);
        }
        

        setCottageObjects(cottageDTO)

    }

    useEffect(() => {
        getUserObjects();
    }, [cottageObjects])

    const getUserObjects = async() => {

        let userDTO = []
        for(const cottage of cottageObjects){
            let u = await UserService.getUserById(cottage.ownerId)
   
            userDTO.push(u.data);
        
        }

        setUserObjects(userDTO);
    }   

    useEffect(() => {
        bindData();
    }, [userObjects])

    const bindData = () => {

        let finalCottages = []

        for (let i = 0; i<scheduledCottages.length; i++) {

            let object = {
                id: scheduledCottages[i].id,
                startingDate: scheduledCottages[i].startingDate,
                endingDate: scheduledCottages[i].startingDate,
                cottageName: cottageObjects[i].name,
                address: scheduledCottages[i].location,
                instructorName: userObjects[i].firstName,
                price : scheduledCottages[i].price
            }

            finalCottages.push(object);
        }

        setShowCottageAppointments(finalCottages);
    }

    const cancelCottage = (cottageToCancel) => {

        const cottageDate = new Date(cottageToCancel.startingDate);
        const currentDate = new Date(getCurrentDate());

        if(cottageDate - currentDate > 3) {
            CottageAppointmentsService.deleteCottageAppointment(cottageToCancel.id);
            alert('You successfully deleted cottage appointment');
            window.location.reload(false);
        }
        else {
            alert('You cant cancel this appointment, there is less then 3 days until it!')
        }

    }


    return ( 
    
    <div className='cottages-container'>
            <div className='head-search-container'>
                <h2 className='header'>Cottages</h2>
                <div className='search-container'>
                    <input ></input>
                    <button className='button'>Search</button>
                </div>
            </div>

            <div className='table-of-cottages'>
                <table className='cottages-table'>
                    <thead>
                        <tr>
                            <th>Starting date</th>
                            <th>Ending date</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Cottage Owner</th>
                            <th>Price</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                        showCottageAppointments.map(
                            cottage =>
                        <tr key={cottage.id}>
                            <td>{cottage.startingDate}</td>
                            <td>{cottage.endingDate}</td>
                            <td>{cottage.cottageName}</td>
                            <td>{cottage.address}</td>
                            <td>{cottage.instructorName}</td>
                            <td>{cottage.price}</td>                            
                            <td><button onClick={() => cancelCottage(cottage)}> Cancel Appointment</button></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ClientCottages;
