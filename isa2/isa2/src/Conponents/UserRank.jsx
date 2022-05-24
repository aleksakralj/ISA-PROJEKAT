import React from 'react';
import '../Assets/Styles/ClientProfilePage.css'
import { useState, useEffect } from 'react';

const UserRank = () => {

    const [points, setPoints] = useState({});
    const [userCategory, setUserCategory] = useState('');


    const loadPoints = () => {

        let userPoints = JSON.parse(localStorage.getItem('usersPoints'));
        setPoints(userPoints);
        setUserCategory(points.userCategory);

    }

    useEffect(() => {
        loadPoints();
    }, [])

    return (
        <div className='user-rank-container'>
            
            <label>RANK: </label>
            <div className='rank-complex'>
                <div className='triangle'/>
                <label>{points.userCategory}</label>
            </div>
        </div>
    );
}

export default UserRank;
