import React, { useEffect, useState } from 'react';
import '../Assets/Styles/CottagesListPage.css';
import CottageService from '../services/CottageService';
import {useHistory} from 'react-router-dom';

import UserService from '../services/UserService';


const CottagesListPage = () => {

    const [cottages, setCottages] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCriteria, setSearchCriteria] = useState('Name');
    const history = useHistory();
    const [cottagesInitalState, setCottagesInitialState] = useState([]);


    const getCottages = async () => {
        const allCottages = await CottageService.getCottages();
        setCottages(allCottages.data);
        setCottagesInitialState(allCottages.data);
    }

    const cottagesOnSearchChange = () => {
        let newCottages = [];

        if(searchCriteria==='Name'){

            if(searchTerm.length===0){
                setCottages(cottagesInitalState);
            } else{
                cottages.forEach(cottage => {
                    if(cottage.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        newCottages.push(cottage);
                    }
                })
                setCottages(newCottages);
            }        
        }
        else if (searchCriteria ==='Address') {
            if(searchTerm.length===0){
                setCottages(cottagesInitalState);
            } else{
                cottages.forEach(cottage => {
                    if(cottage.address.toLowerCase().includes(searchTerm.toLowerCase())){
                        newCottages.push(cottage);
                    }
                })
                setCottages(newCottages);
            }      
        }
    }

    const findOwnerNameById = async (ownerId) => {
        const response = await UserService.getUserById(ownerId);
    }

    const openCottageProfile = async(id) => { 
        let choosenCottage = await CottageService.getCottageById(id);
        localStorage.setItem('activeCottage', JSON.stringify(choosenCottage.data));
        history.push('/cottageprofile');
    }

    useEffect(() => {
        getCottages();
    }, []);


    useEffect(()=> {
        cottagesOnSearchChange();
    },[searchTerm])

    return (
        <div className='cottages-list-container'>
            <div className='cottages-list-caption-search'>

                <h2>
                    Our cottages
                </h2>
                <div className='cottages-search'>
                    <label>Search by</label>
                    <select name='searchBy' 
                        value={searchCriteria}
                        onChange={(e)=>
                            setSearchCriteria(e.target.value)
                    }>
                        <option value="Name">Name</option>
                        <option value="Address">Address</option>
                        <option value="Owner name">Owner name</option>
                    </select>
                    <input 
                        type='text'
                        placeholder='Search'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
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
                            <button className='card-button' onClick={() => openCottageProfile(id)} >See this cottage</button>
                        </li>
                    )

                })}
            </ul>
        </div>
    );
}

export default CottagesListPage;
