import React from 'react';
import '../Assets/Styles/PastAdventures.css'
import { useState, useEffect } from 'react';
import AdventuresHistoryServiceAPI from '../services/AdventuresHistoryServiceAPI';
import {useHistory} from 'react-router-dom'
import AdventureService from '../services/AdventureService';
import UserService from '../services/UserService';

const PastAdventures = () => {

    const [adventures, setAdventures] = useState([]);
    const history = useHistory();
    const [adventureChoosenForFeedback, setAdventureChoosenForFeedback] = useState({});
    const [adventureObjects, setAdventureObjects] = useState([{}]);
    const [userObjects, setUserObjects] = useState([{}]);
    const [activeUser, setactiveUser] = useState({});
    const [shownHistoryAppointments, setShownHistoryAppointments] = useState([{}]);

    useEffect(() =>{
        loadActiveUser();
    },[])

    const loadActiveUser = () => {
        setactiveUser( JSON.parse(localStorage.getItem('activeUser')));
    }

    useEffect (() => {
        loadAdventures();
    }, [activeUser])

    const loadAdventures = async() => {

        let allAdventures = await AdventuresHistoryServiceAPI.getAdventureHistoryAppointmentByUserId(activeUser.id)
       
        setAdventures(allAdventures.data);
    }

    useEffect(() => {
        getAdventureObjects();
    } ,[adventures])

    const getAdventureObjects = async() => {

        let adventureDTO = []

        for (const a of adventures) {
            let responese = await AdventureService.getAdventureById(a.adventureId)
            adventureDTO.push(responese.data)
        }
    
        setAdventureObjects(adventureDTO);
    }

    useEffect(() => {
        getUserObjects();
    }, [adventureObjects])

    const getUserObjects = async() => {
        let userDto = []
        for (const adventure of adventureObjects){
            let u = await UserService.getUserById(adventure.instructorId);
            userDto.push(u.data);
        }
        setUserObjects(userDto);

    }

    useEffect(() => {
        bindData();
    },[userObjects])

    const bindData = () => {
        let finalAdventures = []

        for( let i = 0 ; i< adventures.length; i++) {

            let object = {
                id : adventures[i].id,
                startingDate: adventures[i].startingDate,
                endingDate: adventures[i].endingDate,
                name : adventureObjects[i].name,
                instructorName: userObjects[i].firstName,
                location: adventureObjects[i].address,
                price: adventures[i].price
            }
        
            finalAdventures.push(object);
        }
        setShownHistoryAppointments(finalAdventures);        
    }

    const openFeedbackPage = (adventure) => {
        
        setAdventureChoosenForFeedback(adventure)
        localStorage.setItem('activeEntity', JSON.stringify(adventure))
        localStorage.setItem('isAdventure', true);
        history.push('/adventure-write-feedback/' + adventure.id);
   
    }


    return (
        <div className='past-adventures-container'>
            <div className='head-search-container'>
                <h2 className='header'>Past Adventures</h2>
                <div className='search-container'>
                    <input ></input>
                    <button className='button'>Search</button>
                </div>
            </div>

            <div className='table-of-adventures'>
                <table className='adventures-table'>
                    <thead>
                        <tr>
                            <th>Starting date</th>
                            <th>Ending date</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Fishing instructor</th>
                            <th>Price</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            shownHistoryAppointments.map(
                                adventure => 
                            
                        <tr key={adventure.id}>
                            <td>{adventure.startingDate}</td>
                            <td>{adventure.endingDate}</td>
                            <td>{adventure.name}</td>
                            <td>{adventure.location}</td>
                            <td>{adventure.instructorName}</td>
                            <td>{adventure.price}</td>                            
                            <td><button onClick={() => openFeedbackPage(adventure)}> Send your feedback</button></td>
                        </tr>

                        )}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default PastAdventures;
