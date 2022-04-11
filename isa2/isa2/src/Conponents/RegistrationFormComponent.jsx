import React, { useState, useCallback } from 'react';
import RegistrationRequestService from '../services/RegistrationRequestService';
import { useHistory } from 'react-router-dom';
import validator from 'validator';


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
        type: 'Client'
    });

    const register = async(e) => {

        e.preventDefault();

        if (newUserData.password != passwordConfirmation) {
            alert('Passwrods must match');
        } else {
            await RegistrationRequestService.createRegistrationRequest(newUserData);
            history.push('/registrationwait');
        }
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
                                ...newUserData, email: e.target.value 
                            })}>
                        </input>
                        <input className='registration-input' 
                            placeholder='password' 
                            value={newUserData.password} 
                            onChange={(e) => setNewUserData({ 
                                ...newUserData, password: e.target.value 
                            })}>
                        </input>
                        <input className='registration-input' 
                            placeholder='confirme password' 
                            value={passwordConfirmation} 
                            onChange={(e) => setPasswordConfirmation(e.target.value)}>
                        </input>
                        <input className='registration-input' 
                            placeholder='first name' 
                            value={newUserData.firstName} 
                            onChange={(e) => setNewUserData({ 
                                ...newUserData, firstName: e.target.value 
                            })}> 
                        </input>
                        <input className='registration-input' 
                            placeholder='last name' 
                            value={newUserData.lastName} 
                            onChange={(e) => setNewUserData({
                                 ...newUserData, lastName: e.target.value     
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
                        <input className='registration-input' placeholder='address' value={newUserData.address} onChange={(e) => setNewUserData({ ...newUserData, address: e.target.value })}></input>
                        <input className='registration-input' placeholder='city' value={newUserData.city} onChange={(e) => setNewUserData({ ...newUserData, city: e.target.value })}></input>
                        <input className='registration-input' placeholder='country' value={newUserData.country} onChange={(e) => setNewUserData({ ...newUserData, country: e.target.value })} ></input>
                        <input className='registration-input' type='number' placeholder='phone number' value={newUserData.phoneNumber} onChange={(e) => setNewUserData({ ...newUserData, phoneNumber: e.target.value })}></input>
                        <input className='registration-input' type='date' placeholder='date of birth' value={newUserData.dateOfBirth} onChange={(e) => setNewUserData({ ...newUserData, dateOfBirth: e.target.value })}></input>
                    </div>
                </div>
            </div>

            <div className='registration-buttons'>
                <button className='registration-button' onClick={register} >Register</button>
                <button className='registration-button' >Register with privilages</button>
            </div>
        </div>
    );
}


export default RegistrationFormComponent;
