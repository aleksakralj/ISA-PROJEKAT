import React from 'react';
import CottagesHistoryAppointmentsAPI from '../services/CottagesHistoryAppointmentsAPI';
import { useState, useEffect } from 'react';
import '../Assets/Styles/PastCottages.css';
import {useHistory} from 'react-router-dom'
import CottageService from '../services/CottageService';
import UserService from '../services/UserService';

const PastCottages = () => {
    
    const [cottages, setCottages] = useState([]);
    const [cottageChoosenForFeedback, setCottageChoosenForFeedback] = useState({});
    const history = useHistory();
    const [cottageObjects, setcottageObjects] = useState([{}]);
    const [userObjects, setuserObjects] = useState([{}]);
    const [activeUser, setactiveUser] = useState({});
    const [shownHistoryCottages, setshownHistoryCottages] = useState([{}]);


    useEffect(() =>{
        loadActiveUser();
    },[])

    const loadActiveUser = () => {
        setactiveUser( JSON.parse(localStorage.getItem('activeUser')));
    }

    useEffect (() => {
        loadCottages();
    }, [activeUser])

    const loadCottages = async() => {

        let allCottages = await CottagesHistoryAppointmentsAPI.getCottageHistoryAppointmentByUserId(activeUser.id)
        setCottages(allCottages.data);

    }

    useEffect(() => {
        getCottageObjects();
    }, [cottages])

    const getCottageObjects = async() => {

        let cottageDTO = []
        for (const c of cottages) {
            let responese = await CottageService.getCottageById(c.cottageId)
            cottageDTO.push(responese.data);
        }

        setcottageObjects(cottageDTO);
    }

    useEffect(() =>{
        getUserObjects();
    }, [cottageObjects])

    const getUserObjects = async() => {

        let userDto = []
        for (const cottage of cottageObjects) {
            let c = await UserService.getUserById(cottage.ownerId);
            userDto.push(c.data)
        }

        setuserObjects(userDto);
    }

    useEffect(() => {
        bindData();
    }, [userObjects])

    const bindData = () => {

        let finalCottages = []

        for (let i = 0; i<cottages.length ; i++) {
            let object = {
                id: cottages[i].id,
                startingDate: cottages[i].startingDate,
                endingDate: cottages[i].endingDate,
                name : cottageObjects[i].name,
                ownerName : userObjects[i].firstName,
                location: cottageObjects[i].address,
                price : cottages[i].price
            }
        
            finalCottages.push(object);
        }

        setshownHistoryCottages(finalCottages);
    }


    const openFeedbackPage = (cottage) => {
        
        setCottageChoosenForFeedback(cottage)
        localStorage.setItem('activeEntity', JSON.stringify(cottage))
        localStorage.setItem('isCottage', true);
        history.push('/cottage-write-feedback/' + cottage.id);
   
    }


    return (
        <div className='past-cottages-container'>
            <div className='head-search-container'>
                <h2 className='header'>Past Cottages</h2>
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
                            <th>Cottage owner</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            shownHistoryCottages.map(
                                cottage => 
                            
                        <tr key={cottage.id}>
                            <td>{cottage.startingDate}</td>
                            <td>{cottage.endingDate}</td>
                            <td>{cottage.name}</td>
                            <td>{cottage.location}</td>
                            <td>{cottage.ownerName}</td>
                            <td>{cottage.price}</td>                            
                            <td><button onClick={() => openFeedbackPage(cottage)}> Send your feedback</button></td>
                        </tr>

                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
}


export default PastCottages;
