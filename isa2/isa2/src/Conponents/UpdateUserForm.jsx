import React from 'react';
import { useState, useEffect } from 'react';
import '../Assets/Styles/ClientProfilePage.css'

const UpdateUserForm = ({confirmUpdate,activeUser}) => {

    const [newUserData, setNewUserData] = useState({activeUser});

    const getUserData = () => {
        let user = JSON.parse(localStorage.getItem('activeUser'));
        setNewUserData(user);
    }

    useEffect(() => {
        getUserData();
    }, []);

    return (
        
             <div className='container-xxl'>
                    <h1 className='update-caption'> Update data </h1>
                    
                    <div className='labels-and-inputs-update'>
                        <div className='label-container'>
                            <label> First name: </label>
                            <label> Last name: </label>
                            <label> Password: </label>
                            <label> Address: </label>
                            <label> City: </label>
                            <label> Country: </label>
                            <label> Phone number: </label>
                            <label> Date of Birth: </label>
                        </div>

                        <div className='input-container' >
                            <input 
                                className='update-input'
                                value={newUserData.firstName}
                                onChange={(e) => setNewUserData({ 
                                    ...newUserData, 
                                    firstName: e.target.value})}
                            />
                            <input 
                                className='update-input'
                                value={newUserData.lastName}
                                onChange={(e) => setNewUserData({
                                    ...newUserData,
                                    lastName: e.target.value
                                })}
                            />
                            <input 
                                className='update-input'
                                value={newUserData.password}
                                onChange={(e) => setNewUserData({
                                    ...newUserData,
                                    password: e.target.value
                                })}
                            />
                            <input 
                                className='update-input'
                                value={newUserData.address}
                                onChange={(e) => setNewUserData({
                                    ...newUserData,
                                    address: e.target.value
                                })}
                            />
                            <input 
                                className='update-input'
                                value={newUserData.city}
                                onChange={(e) => setNewUserData({
                                    ...newUserData,
                                    city: e.target.value
                                })}
                            />
                            <input 
                                className='update-input'
                                value={newUserData.country}
                                onChange={(e) => setNewUserData({
                                    ...newUserData,
                                    country: e.target.value
                                })}
                            />
                            <input 
                                className='update-input'
                                value={newUserData.phoneNumber}
                                onChange={(e) => setNewUserData({
                                    ...newUserData,
                                    phoneNumber: e.target.value
                                })}
                            />
                            <input 
                                className='update-input'
                                value={newUserData.dateOfBirth}
                                onChange={(e) => setNewUserData({
                                    ...newUserData,
                                    dateOfBirth: e.target.value
                                })}
                            type='date'/>
                        </div>
                    </div>
                    <div className='buttons'>
                        <button className='button' onClick={() => confirmUpdate(newUserData)} > Update</button>
                        <button className='button'>Cancel</button>
                    </div>
                </div>
    );
}

export default UpdateUserForm;
