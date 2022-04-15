import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import '../Assets/Styles/AdventuresListPage.css';
import AdventureService from '../services/AdventureService';
import UserService from '../services/UserService';

const AdventuresListPage = () => {

    const [adventures, setAdventures] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const history = useHistory();

    const getAdventures = async () => {
        const allAdventures = await AdventureService.getAdventures();
        setAdventures(allAdventures.data);
    }

    const searchHandler = (event) => {
        setSearchTerm(event.target.value);
    }

    const findInstructorNameById = async (instructorId) => {
        const response = await UserService.getUserById(instructorId);
    }

    const openAdventureProfile = async(id) => {
        
        let choosenAdventue = await AdventureService.getAdventureById(id);
        console.log(choosenAdventue.data);
        localStorage.setItem('activeAdventure', JSON.stringify(choosenAdventue.data));

        history.push('/adventureprofile');
    }

    useEffect(() => {
        getAdventures();
    }, []);

    return (
        <div className='adventure-list-container'>
            <div className='adventure-list-caption-search'>

                <h2>
                    Our adventures
                </h2>
                <div className='adventure-search'>
                    <label>Search by</label>
                    <select name='searchBy'>
                        <option>Name</option>
                        <option>Address</option>
                        <option>Instructor name</option>
                    </select>
                    <input 
                        type='text'
                        placeholder='Search'
                        value={searchTerm}
                        onChange={searchHandler}
                    />
                </div>
            </div>

            <ul className='adventure-card-list'>
                {adventures.map((adventure) => {
                    const { id, name, address, additionalServices, description, instructorId, maxPople, prices, rulesOfConduct, termsOfReservation, fishingEquipment_ } = adventure;
                    findInstructorNameById(instructorId);
                    return (
                        <li className='adventure-card' key={id}>
                            <h4>{name}</h4>
                            <img className='card-image' src='https://slatefallsoutposts.com/wp-content/uploads/2019/11/slid1450.jpg' alt="" />
                            <h5>{ }</h5>
                            <h5>Rating: 5</h5>
                            <button className='card-button' onClick={() => openAdventureProfile(id)}>See this adventure</button>
                        </li>
                    )

                })}
            </ul>
        </div>
    );
}

export default AdventuresListPage;
