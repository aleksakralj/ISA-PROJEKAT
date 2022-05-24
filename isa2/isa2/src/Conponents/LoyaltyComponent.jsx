import React from 'react';
import '../Assets/Styles/ClientProfilePage.css' 
import { useState, useEffect } from 'react';

const LoyaltyComponent = () => {

    const [points, setPoints] = useState({});

    const loadPoints = () => {

        let userPoints = JSON.parse(localStorage.getItem('usersPoints'));
        setPoints(userPoints);
        
    }

    useEffect(() => {
        loadPoints();
    }, [])
    
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
                    value={points.points}
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
