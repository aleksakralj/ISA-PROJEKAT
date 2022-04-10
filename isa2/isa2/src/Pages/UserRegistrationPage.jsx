import React, {useState, useCallback} from 'react';
import '../Assets/Styles/UserRegistrationPage.css'
import PrivilagesRegistrationComponent from '../Conponents/PrivilagesRegistrationComponent';
import RegistrationRequestService from '../services/RegistrationRequestService';

const UserRegistrationPage = () => {
    const [showRegistrationWithPrivilages, setShowRegistrationWithPrivilages] = useState(false);
    const [hideRegistrationButtons, setHideRegistrationButtons] = useState(true);
    const [showRegistrationButtons, setShowRegistrationButtons] = useState(false);
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city,setCity] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [userType, setUserType] = useState('Client');
    
    const revealHiddenRegistration = () => {
        setShowRegistrationWithPrivilages(true)
        setHideRegistrationButtons(false);
    }
    const callback = useCallback((showRegistrationButtons)=>{
        setHideRegistrationButtons(true);
        setShowRegistrationWithPrivilages(false);
    },[]);
    
    const register = (e) => {
        e.preventDefault();
        let userType = setUserType('Client')
        let user = {email,password,firstName,lastName,address,city,country,phoneNumber,dateOfBirth, userType}
        console.log('user => ' + JSON.stringify(user));

    }
    return (
        <div className='registration-page-container'>
            <h1 className='registration-page-caption'>REGISTRATION</h1>
            <div className='registration-form-container'>
                <div className='registration-data-container'>
                    <div className='registration-lables-container'>
                        <label> Email: </label>
                        <label> Password:</label>
                        <label> Confirme password:</label>
                        <label> First name:</label>
                        <label> Last name:</label>
                        <label> Address:</label>
                        <label> City:</label>
                        <label> Country:</label>
                        <label> Phone number:</label>
                        <label> Date of birth:</label>
                    </div>
                    <div className='registration-input-container'>
                        <input className='registration-inputs' placeholder='email' value={email} onInput={e => setEmail(e.target.value)} ></input>
                        <input className='registration-inputs' placeholder='password' value={password} onInput={e => setPassword(e.target.value)}></input>
                        <input className='registration-inputs' placeholder='confirme password'></input>
                        <input className='registration-inputs' placeholder='first name' value={firstName} onInput={e=>setFirstName(e.target.value)}></input>
                        <input className='registration-inputs' placeholder='last name' value={lastName} onInput={e=>setLastName(e.target.value)}></input>
                        <input className='registration-inputs' placeholder='address' value={address} onInput={e=>setAddress(e.target.value)}></input>
                        <input className='registration-inputs' placeholder='city' value={city} onInput={e=>setCity(e.target.value)}></input>
                        <input className='registration-inputs' placeholder='country' value={country} onInput={e=>setCountry(e.target.value)} ></input>
                        <input className='registration-inputs' type='number' placeholder='phone number' value={phoneNumber} onInput={e=>setPhoneNumber(e.target.value)}></input>
                        <input className='registration-inputs' type='date' placeholder='date of birth' value={dateOfBirth} onInput={e=>setDateOfBirth(e.target.value)}></input>
                    </div>
                </div>
                <div className='registration-button-container'>  
                    {hideRegistrationButtons? 
                    <div className='registration-buttons'>
                        <button className='registration-button' onClick={register}>Register</button>
                        <button className='registration-button' onClick={revealHiddenRegistration}>Register with privilages</button>
                    </div>
                    :null }
                    {showRegistrationWithPrivilages? <PrivilagesRegistrationComponent parentCallback={callback}/> :null}
                </div>
            </div>
        </div>
    );
}

export default UserRegistrationPage;
