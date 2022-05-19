import React from 'react';
import { useState, useEffect } from 'react';
import ProfileInfoBox from '../Conponents/ProfileInfoBox';
import UpdateUserForm from '../Conponents/UpdateUserForm';
import UserService from '../services/UserService';
import {useHistory} from 'react-router-dom'

const ClientProfilePage = () => {
    
    const [wantToUpdate, setWantToUpdate] = useState(false);
    const [activeUser, setActiveUser] = useState({});
    const history = useHistory();

    const getUserData = () => {
        let user = JSON.parse(localStorage.getItem('activeUser'));
        setActiveUser(user);
    }

    const updateProfile = () => {
        setWantToUpdate(true);
    }

    const deleteProfile = () => {
        history.push('/deleteprofile')        
    }

    const confirmUpdate = (newUserData) => {
        setActiveUser(newUserData);
        localStorage.removeItem('activeUser');
        localStorage.setItem('activeUser', JSON.stringify(newUserData));
        UserService.updateUser(newUserData,activeUser.id);
        setWantToUpdate(false);
    } 

    const cancelUpdate = () => {
        setWantToUpdate(false);        
    }

    useEffect(() => {
        getUserData();
    }, []);
    
    return (
        <div className='container-box'>
            {
                !wantToUpdate ? 
                    <ProfileInfoBox updateProfile={updateProfile} activeUser={activeUser} deleteProfile={deleteProfile} /> 
                    : <UpdateUserForm confirmUpdate={confirmUpdate} activeUser={activeUser} cancelUpdate={cancelUpdate}/>
            }
        </div>
    );
}

export default ClientProfilePage;
