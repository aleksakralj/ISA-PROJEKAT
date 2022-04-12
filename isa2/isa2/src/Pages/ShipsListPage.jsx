import React, { useEffect, useState } from 'react';
import '../Assets/Styles/ShipListPage.css';
import ShipService from '../services/ShipService';

import UserService from '../services/UserService';


const ShipsListPage = () => {

    const [ships, setShips] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const getShips = async () => {
        const allShips = await ShipService.getShips();
        console.log(allShips);
        setShips(allShips.data);
        console.log(ships);
    }

    const searchHandler = (event) => {
        setSearchTerm(event.target.value);
    }


    const findOwnerNameById = async (ownerId) => {
        const response = await UserService.getUserById(ownerId);
    }

    useEffect(() => {
        getShips();
    }, []);

    return (
        <div className='ship-list-container'>
            <div className='ship-list-caption-search'>

                <h2>
                    Our ships
                </h2>
                <div className='ship-search'>
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

            <ul className='ship-card-list'>
                {ships.map((ship) => {
                    
                    const {id, name, address, ownerId, description, rating, rulesOfConduct, termsOfReservation, capacity, fishingEquipment, hp, lenght, navigation, numberOfEngines, rules, topSpeed, type} = ship;

                    findOwnerNameById(ownerId);
                    return (
                        <li className='ship-card' key={id}>
                            <h4>{name}</h4>
                            <img className='card-image' src='https://slatefallsoutposts.com/wp-content/uploads/2019/11/slid1450.jpg' alt="" />
                            <h5>{ }</h5>
                            <h5>Rating: 5</h5>
                            <button className='card-button'>See this ship</button>
                        </li>
                    )

                })}
            </ul>
        </div>
    );
}

export default ShipsListPage;
