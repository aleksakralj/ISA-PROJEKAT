import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import AdventureRatingCalculatorAPI from '../services/AdventureRatingCalculatorAPI';
import ClientPointsService from '../services/ClientPointsService';
import CottageRatingCalculatorAPI from '../services/CottageRatingCalculatorAPI';
import EntityRatingAPI from '../services/EntityRatingAPI';
import ShipsRatingCalculatorAPI from '../services/ShipsRatingCalculatorAPI';

const RateEntity = ({activeEntityId, whichEntity}) => {

    const [grade, setGrade] = useState('');    
    const [activeUser, setActiveUser] = useState({});

    const canIRate = async() => {

        if (whichEntity === 'adventure') {

            let response = await EntityRatingAPI.getAdventureRatings();

            let ratings = response.data;

            ratings.forEach(rating => {
                if(rating.userId === activeUser.id) {
                    alert("You already rated this adventure");
                }
                else rateAdventure();
            });
        }

        else if (whichEntity === 'ship') {
            let response = await EntityRatingAPI.getShipRatings();

            let ratings = response.data;

            
            ratings.forEach(rating => {
                if(rating.userId === activeUser.id) {
                    alert("You already rated this ship");
                }
                else rateShip();
            })
        }
        
        else if (whichEntity === 'cottage') {
            let response = await EntityRatingAPI.getCottageRatings();
            let ratings = response.data;

            ratings.forEach(rating => {
                if(rating.userId === activeUser.id) {
                    alert("You already rated this cottage")
                }
                else rateCottage();
            })
        
        }

    }

    const rateAdventure = () => {
        let userRatesEntity = {adventureId: activeEntityId, userId: activeUser.id, rating: grade}
    
        EntityRatingAPI.createAdventureRatings(userRatesEntity);
        AdventureRatingCalculatorAPI.updateAdventureRating(userRatesEntity);
        updateUserPoints();

    }

    const rateShip = () => {
        let userRatesEntity = {shipId: activeEntityId, userId: activeUser.id, rating: grade}
  
        EntityRatingAPI.createShipRatings(userRatesEntity);
        ShipsRatingCalculatorAPI.updateShipRating(userRatesEntity);
        updateUserPoints();
    }

    const rateCottage = () => {
        let userRatesEntity = {cottageId: activeEntityId, userId: activeUser.id, rating: grade}
  
        EntityRatingAPI.createCottageRatings(userRatesEntity);
        CottageRatingCalculatorAPI.updateCottageRating(userRatesEntity);
        updateUserPoints();
    }
    

    const updateUserPoints = () => {
        let points = 10
        ClientPointsService.updateClientPoints(points, activeUser.id);
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
                onClick={()=> canIRate()}
            >
                    Rate
            </button>
        </div>
    );

    }
export default RateEntity;
