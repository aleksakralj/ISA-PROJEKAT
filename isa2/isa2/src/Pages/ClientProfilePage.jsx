import React from 'react';
import { useState, useEffect } from 'react';
import ProfileInfoBox from '../Conponents/ProfileInfoBox';
import UpdateUserForm from '../Conponents/UpdateUserForm';
import UserService from '../services/UserService';

const ClientProfilePage = () => {
    
    const [wantToUpdate, setWantToUpdate] = useState(false);
    const [activeUser, setActiveUser] = useState({});

    const getUserData = () => {
        let user = JSON.parse(localStorage.getItem('activeUser'));
        setActiveUser(user);
    }

    const updateProfile = () => {
        setWantToUpdate(true);
    }

    const confirmUpdate = (newUserData) => {
        setActiveUser(newUserData);
        localStorage.removeItem('activeUser');
        localStorage.setItem('activeUser', JSON.stringify(newUserData));
        UserService.updateUser(newUserData,activeUser.id);
        setWantToUpdate(false);
    }

    useEffect(() => {
        getUserData();
    }, []);
    
    return (
        <div className='container-box'>
            {
            !wantToUpdate 
                ? <ProfileInfoBox updateProfile={updateProfile} activeUser={activeUser} /> 
                : <UpdateUserForm confirmUpdate={confirmUpdate} activeUser={activeUser}/>
            }
        </div>
    );
}

export default ClientProfilePage;
