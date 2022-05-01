import React, { useEffect, useState } from 'react';
import '../Assets/Styles/ShipListPage.css';
import ShipService from '../services/ShipService';
import {useHistory} from 'react-router-dom'
import UserService from '../services/UserService';


const ShipsListPage = () => {

    const [ships, setShips] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCriteria, setSearchCriteria] = useState('Name');
    const history = useHistory();
    const [shipsInitialState, setShipsInitialState] = useState([]);

    const getShips = async () => {
        const allShips = await ShipService.getShips();      
        setShips(allShips.data);
        setShipsInitialState(allShips.data);      
    }

    const shipsChangeOnSearch = () => {
        
        let newShips = [];
        
        
        if(searchCriteria==='Name'){

            if(searchTerm.length===0){
                setShips(shipsInitialState);
            } else{
                ships.forEach(ship => {
                    if(ship.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        newShips.push(ship);
                    }
                })
                setShips(newShips);
            }        
        }
        else if (searchCriteria ==='Address') {
            if(searchTerm.length===0){
                setShips(shipsInitialState);
            } else{
                ships.forEach(ship => {
                    if(ship.address.toLowerCase().includes(searchTerm.toLowerCase())){
                        newShips.push(ship);
                    }
                })
                setShips(newShips);
            }      
        }
    }


    const findOwnerNameById = async (ownerId) => {
        const response = await UserService.getUserById(ownerId);
    }


    const openShipProfile = async(id) => {
        
        let choosenShip = await ShipService.getShipById(id);
        localStorage.setItem('activeShip', JSON.stringify(choosenShip.data));

        history.push('/shipprofile');
    }

    useEffect(() => {
        getShips();
    }, []);

    useEffect(() => {
        shipsChangeOnSearch();
    },[searchTerm])

    return (
        <div className='ship-list-container'>
            <div className='ship-list-caption-search'>

                <h2>
                    Our ships
                </h2>
                <div className='ship-search'>
                    <label>Search by</label>
                    <select name='searchBy'
                    value ={searchCriteria}
                    onChange={(e)=>
                        setSearchCriteria(e.target.value)
                    }>
                        <option value='Name'>Name</option>
                        <option value='Address'>Address</option>
                        <option value='Owner name'>Owner name</option>
                    </select>
                    <input 
                        type='text'
                        placeholder='Search'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
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
                            <button className='card-button' onClick={() => openShipProfile(id)}>See this ship</button>
                        </li>
                    )

                })}
            </ul>
        </div>
    );
}

export default ShipsListPage;
