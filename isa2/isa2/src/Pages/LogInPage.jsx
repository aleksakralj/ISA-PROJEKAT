import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import logInPicture from '../picture.jpg'
import '../Assets/Styles/LogInPage.css'
import axios from 'axios';
import ClientPointsService from '../services/ClientPointsService';

const LogInPage = () => {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswprdInput] = useState('');
    const history = useHistory();

    const login = async () => {

        let activeUser = await axios.get
            ("http://localhost:8080/api/v1/users/"+ emailInput + "/" + passwordInput) 
    
        localStorage.setItem('activeUser', JSON.stringify(activeUser.data));

        getUsersPoints(activeUser.data.id)



        history.push('/homepage');
    }

    const getUsersPoints = async(userId) => {

        let [userPoints, userPenalties] = await Promise.all([
            ClientPointsService.getClientPointsById(userId),
            ClientPointsService.getClientPenaltiesByUserId(userId)
        ]);
        
        localStorage.setItem('usersPoints', JSON.stringify(userPoints.data));        
        localStorage.setItem('usersPenalties', JSON.stringify(userPenalties.data));    

    }

    return (
        <div className='login-page-container'>
            <div className='login-text-and-picture-container'>
                <img className='login-picture' 
                    src={logInPicture}>
                </img>
                <div className='login-text-message-container'>
                    <h2 className='login-text-message'>We are best in the business</h2>
                </div>
            </div>
            <div className='login-container'>
                <h1>Please log in to your account</h1>
                <div className='data-for-logging'>
                    <div className='data-label-container'>
                        <label className='login-data-label'> Email: </label>
                        <label className='login-data-label' > Password: </label>                  
                    </div>
                    <div className='data-input-container'>
                        <input className='login-data-input' 
                            placeholder='email' 
                            value={emailInput} 
                            onInput={e=>setEmailInput(e.target.value)
                        }/>
                        <input className='login-data-input' 
                            placeholder='password' 
                            type='password' 
                            value={passwordInput} 
                            onInput={e=>setPasswprdInput(e.target.value)}
                        />                
                    </div>
                </div>
                <div>
                    <button className="login-button" 
                        onClick={login}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LogInPage;
