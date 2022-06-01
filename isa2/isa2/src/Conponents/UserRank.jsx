import React from 'react';
import '../Assets/Styles/ClientProfilePage.css'
import { useState, useEffect } from 'react';
import ClientPointsService from '../services/ClientPointsService';

const UserRank = ({userPoints}) => {

    return (
        <div className='user-rank-container'>
            
            <label>RANK: </label>
            <div className='rank-complex'>
                <div className='triangle'/>
                <label>{userPoints.userCategory}</label>
            </div>
        </div>
    );
}

export default UserRank;
