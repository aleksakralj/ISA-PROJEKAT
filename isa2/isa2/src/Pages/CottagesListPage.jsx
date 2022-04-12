import React, { useEffect, useState } from 'react';
import '../Assets/Styles/CottagesListPage.css';
import CottageService from '../services/CottageService';

import UserService from '../services/UserService';


const CottagesListPage = () => {

    const [cottages, setCottages] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getCottages = async () => {
        const allCottages = await CottageService.getCottages();
        setCottages(allCottages.data);
    }

    const searchHandler = (event) => {
        setSearchTerm(event.target.value);
    }


    const findOwnerNameById = async (ownerId) => {
        const response = await UserService.getUserById(ownerId);
    }

    useEffect(() => {
        getCottages();
    }, []);

    return (
        <div className='cottages-list-container'>
            <div className='cottages-list-caption-search'>

                <h2>
                    Our cottages
                </h2>
                <div className='cottages-search'>
                    <label>Search by</label>
                    <select name='searchBy'>
                        <option>Name</option>
                        <option>Address</option>
                        <option>Owner name</option>
                    </select>
                    <input 
                        type='text'
                        placeholder='Search'
                        value={searchTerm}
                        onChange={searchHandler}
                    />
                </div>
            </div>

            <ul className='cottage-card-list'>
                {cottages.map((cottage) => {
                    
                    const {id, address, description, name, numberOfRooms, ownerId, rules, photos} = cottage;

                    findOwnerNameById(ownerId);
                    return (
                        <li className='cottage-card' key={id}>
                            <h4>{name}</h4>
                            <img className='card-image' src='https://slatefallsoutposts.com/wp-content/uploads/2019/11/slid1450.jpg' alt="" />
                            <h5>{ }</h5>
                            <h5>Rating: 5</h5>
                            <button className='card-button'>See this cottage</button>
                        </li>
                    )

                })}
            </ul>
        </div>
    );
}

export default CottagesListPage;
