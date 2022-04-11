import React, {useState, useCallback} from 'react';
import '../Assets/Styles/UserRegistrationPage.css'
import RegistrationFormComponent from '../Conponents/RegistrationFormComponent';

const UserRegistrationPage = () => {
    
    return (
        <div className='registration-page-container'>
            <h1 className='registration-page-caption'>REGISTRATION</h1>
            <RegistrationFormComponent/>            
        </div>
    );
}

export default UserRegistrationPage;
