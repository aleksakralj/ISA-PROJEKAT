import React, { useState, useCallback } from 'react';
import RegistrationRequestService from '../services/RegistrationRequestService';
import { useHistory } from 'react-router-dom';
import validator from 'validator';
import emailjs from 'emailjs-com';
import axios from 'axios';
import UserService from '../services/UserService';

const RegistrationFormComponent = () => {
   
    const history = useHistory();
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [newUserData, setNewUserData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        phoneNumber: '',
        dateOfBirth: '',
        type: 1
    });
    
    const register = async(e) => {

        e.preventDefault();

        let checkInput = validateInput();

        if(checkInput === false) {
            alert('Your inputs are not written as required');
        }
        else {
            if (newUserData.password != passwordConfirmation) {
                alert('Passwrods must match');
            } else {
            
            localStorage.setItem('wantedUserInfo' , JSON.stringify(newUserData));

            var params = {nesto : "http://localhost:3000/confirmation"}
            emailjs.send('service_5rghav8', 'template_h5b17px', params , 'gXf9s006PxRAmmhgz')
            .then((resoult) => {
                    console.log(resoult.text)            
                    history.push('/homepage')
                }, (error) => {
                    console.log(error.text)
                });
            }
        }
    }

    const validateInput = () => {

        if(!validator.isEmail(newUserData.email) ||
            validator.isEmpty(newUserData.email) ||
            validator.isEmpty(newUserData.password) ||
            validator.isEmpty(passwordConfirmation) || 
            validator.isEmpty(newUserData.firstName) ||
            validator.isEmpty(newUserData.lastName) ||
            validator.isEmpty(newUserData.address) ||
            validator.isEmpty(newUserData.country) ||
            validator.isEmpty(newUserData.city) ||
            validator.isEmpty(newUserData.phoneNumber) ||
            validator.isEmpty(newUserData.dateOfBirth) ||
            !validator.isNumeric(newUserData.phoneNumber) 
        ) {
            return false;
        }
        return true;
    }

    return (
        <div className='registration-form-container'>
            <div className='registration-data-container'>
                <div className='registration-main-data-container'>
                    <div className='registration-main-data-labels'>
                        <label> Email: </label>
                        <label> Password:</label>
                        <label> Confirme password:</label>
                        <label> First name:</label>
                        <label> Last name:</label>
                    </div>
                    <div className='registration-main-data-inputs'>
                        <input className='registration-input' 
                            placeholder='email' 
                            value={newUserData.email} 
                            onChange={(e) => setNewUserData({ 
                                ...newUserData, 
                                email: e.target.value 
                            })}>
                        </input>
                        <input className='registration-input' 
                            placeholder='password' 
                            type='password'
                            value={newUserData.password} 
                            onChange={(e) => setNewUserData({ 
                                ...newUserData, 
                                password: e.target.value 
                            })}>
                        </input>
                        <input className='registration-input' 
                            placeholder='confirme password' 
                            type='password'
                            value={passwordConfirmation} 
                            onChange={(e) => setPasswordConfirmation(e.target.value)}>
                        </input>
                        <input className='registration-input' 
                            placeholder='first name' 
                            value={newUserData.firstName} 
                            onChange={(e) => setNewUserData({ 
                                ...newUserData, 
                                firstName: e.target.value 
                            })}> 
                        </input>
                        <input className='registration-input' 
                            placeholder='last name' 
                            value={newUserData.lastName} 
                            onChange={(e) => setNewUserData({
                                 ...newUserData, 
                                 lastName: e.target.value 
                                
                            })}></input>
                    </div>
                </div>
                <div className='registration-side-data-container'>
                    <div className='registration-side-data-labels'>
                        <label> Address:</label>
                        <label> City:</label>
                        <label> Country:</label>
                        <label> Phone number:</label>
                        <label> Date of birth:</label>
                    </div>
                    <div className='registration-side-data-inputs'>
                        <input className='registration-input' 
                            placeholder='address' 
                            value={newUserData.address} 
                            onChange={(e) => setNewUserData({ 
                                ...newUserData, 
                                address: e.target.value 
                            })}
                        />
                        <input className='registration-input' 
                            placeholder='city' 
                            value={newUserData.city} 
                            onChange={(e) => setNewUserData({
                                 ...newUserData, 
                                 city: e.target.value 
                            })}
                        />
                        <input className='registration-input' 
                            placeholder='country' 
                            value={newUserData.country} 
                            onChange={(e) => setNewUserData({ 
                                ...newUserData, country: e.target.value 
                            })}
                        />
                        <input className='registration-input' 
                            type='number'
                            placeholder='phone number' 
                            value={newUserData.phoneNumber} 
                            onChange={(e) => setNewUserData({ 
                                ...newUserData, phoneNumber: e.target.value 
                            })}
                        />
                        <input className='registration-input' 
                            type='date' 
                            placeholder='date of birth' 
                            value={newUserData.dateOfBirth} 
                            onChange={(e) => setNewUserData({ 
                                ...newUserData, dateOfBirth: e.target.value
                            })}
                        />
                    </div>
                </div>
            </div>

            <div className='registration-buttons'>
                <button className='registration-button' onClick={register} >Register</button>
            </div>
        </div>
    );
}


export default RegistrationFormComponent;
