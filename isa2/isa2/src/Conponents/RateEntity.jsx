import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import AdventureRatingCalculatorAPI from '../services/AdventureRatingCalculatorAPI';
import CottageRatingCalculatorAPI from '../services/CottageRatingCalculatorAPI';
import EntityRatingAPI from '../services/EntityRatingAPI';
import ShipsRatingCalculatorAPI from '../services/ShipsRatingCalculatorAPI';


const RateEntity = ({activeEntityId, whichEntity}) => {

    const [grade, setGrade] = useState('');    
    const [activeUser, setActiveUser] = useState({});

    const rateEntity = () => {

        if(whichEntity === 'adventure'){

            let userRatesEntity = {adventureId: activeEntityId, userId: activeUser.id, rating: grade}
    
            EntityRatingAPI.createAdventureRatings(userRatesEntity);
            AdventureRatingCalculatorAPI.updateAdventureRating(userRatesEntity);
            console.log('Rating completed');
        }

        else if( whichEntity === 'cottage') {
            let userRatesEntity = {cottageId: activeEntityId, userId: activeUser.id, rating: grade}
  
            EntityRatingAPI.createCottageRatings(userRatesEntity);
            CottageRatingCalculatorAPI.updateCottageRating(userRatesEntity);
        }
        
        else if (whichEntity === 'ship') {
            let userRatesEntity = {shipId: activeEntityId, userId: activeUser.id, rating: grade}
  
            console.log('aaaa')

            EntityRatingAPI.createShipRatings(userRatesEntity);
            ShipsRatingCalculatorAPI.updateShipRating(userRatesEntity);
            
        }



    }

    const getActiveUser = () => {
        setActiveUser(JSON.parse(localStorage.getItem('activeUser')));   
    }

    useEffect(() => {
        getActiveUser();
    },[])

    return (
        <div className='grade-container'>
            <div className='grade-data'>
                <label className='rating-label'>Rate entity: </label>
                <input
                    className='rating-input' 
                    type='number' 
                    min='1' 
                    max='5'
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                ></input>
            </div>
            <button 
                className='submit-grade'
                onClick={()=> rateEntity()}
            >
                    Rate
            </button>
        </div>
    );
}

export default RateEntity;
