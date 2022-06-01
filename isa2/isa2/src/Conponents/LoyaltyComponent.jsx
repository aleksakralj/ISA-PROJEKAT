import React from 'react';
import '../Assets/Styles/ClientProfilePage.css' 
import { useState, useEffect } from 'react';
import ClientPointsService from '../services/ClientPointsService';

const LoyaltyComponent = ({ userPoints}) => {
    
    return (
        <div className='loyalty-container'>         
            <div className='loyalty-labels'>
                <label>Number of points:</label>
                <label>Number of penalties:</label>    
            </div>

            <div className='loyalty-inputs'>
                <input 
                    contentEditable='false' 
                    disabled='true'
                    value={userPoints.points}
                    >
                </input>
                <input 
                    contentEditable='false' 
                    disabled='true'>
                </input>
            </div>
        </div>
    );
}

export default LoyaltyComponent;
