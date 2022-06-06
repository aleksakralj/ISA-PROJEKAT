import React from 'react';
import { useState, useEffect } from 'react';
import UserService from '../services/UserService';
import {useHistory} from 'react-router-dom'

const ConfirmationProfile = () => {
    
    const [newUser, setNewUser] = useState({});
    const history = useHistory();

    useEffect(() => {
        loadUserData();
    }, [])

    const loadUserData = () => {
        let data = JSON.parse(localStorage.getItem('wantedUserInfo'));
        setNewUser(data);
    }

    const saveUser = () => {
          
        UserService.createUser(newUser);
        history.push('/login')
    }
    
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            height: '100vh',
            alignItems: 'center',
            justifyContent:'space-evenly',
            flexDirection: 'column',
            backgroundColor: 'whitesmoke'
            
        }}>
            <h1>Verify registration</h1>
            <button style={{
                width: '200px',
                height: '100px',
                backgroundColor: 'lightblue'
            }}
                onClick={() => saveUser()}
            >Confirme Registration</button>
        </div>
    );
}

export default ConfirmationProfile;
