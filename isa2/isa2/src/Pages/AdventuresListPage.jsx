import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import '../Assets/Styles/AdventuresListPage.css';
import AdventureService from '../services/AdventureService';

const AdventuresListPage = () => {

    const [adventures, setAdventures] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchCriteria, setSearchCriteria] = useState('Name');
    const history = useHistory();  
    const [adventuresInitalState, setAdventuresInitialState] = useState([]);

    const getAdventures = async () => {
        const allAdventures = await AdventureService.getAdventures();
        setAdventures(allAdventures.data);
        setAdventuresInitialState(allAdventures.data);
    } 

    const openAdventureProfile = async(id) => {        
        let choosenAdventue = await AdventureService.getAdventureById(id);
        localStorage.setItem('activeAdventure', JSON.stringify(choosenAdventue.data));
        history.push('/adventureprofile');
    }

    const adventuresChangeOnSearch = () => {
        
        let newAdventures = [];
        
        
        if(searchCriteria==='Name'){

            if(searchTerm.length===0){
                setAdventures(adventuresInitalState);
            } else{
                adventures.forEach(adventure => {
                    if(adventure.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        newAdventures.push(adventure);
                    }
                })
                setAdventures(newAdventures);
            }        
        }
        else if (searchCriteria ==='Address') {
            if(searchTerm.length===0){
                setAdventures(adventuresInitalState);
            } else{
                adventures.forEach(adventure => {
                    if(adventure.address.toLowerCase().includes(searchTerm.toLowerCase())){
                        newAdventures.push(adventure);
                    }
                })
                setAdventures(newAdventures);
            }      
        }
    }

    useEffect(() => {
        getAdventures();        
    }, []);

    useEffect(() => {
        adventuresChangeOnSearch();
    }, [searchTerm])

    return (
        <div className='adventure-list-container'>
            <div className='adventure-list-caption-search'>
                <h2>
                    Our adventures
                </h2>
                <div className='adventure-search'>
                    <label>Search by</label>
                    <select name='searchBy' 
                        value={searchCriteria} 
                        onChange={(e) => 
                            setSearchCriteria(e.target.value)
                        }>
                        
                        <option value="Name">
                            Name
                        </option>
                        <option value="Address">
                            Address
                        </option>
                        <option value="Instructor name">
                            Instructor name
                        </option>
                    </select>
                    <input 
                        type='text'
                        placeholder='Search'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
 
            <ul className='adventure-card-list' >
                {
                
                adventures.map((adventure) => {
                    const { 
                        id, 
                        name, 
                    } = adventure;
                    
                    return (
                        <li className='adventure-card' key={id}>
                            <h4>{name}</h4>
                            <img className='card-image' 
                                src='https://slatefallsoutposts.com/wp-content/uploads/2019/11/slid1450.jpg' 
                                alt="" 
                            />
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
