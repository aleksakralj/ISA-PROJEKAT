import React from 'react';
import { useState, useEffect } from 'react';
import ProfileInfoBox from '../Conponents/ProfileInfoBox';
import UpdateUserForm from '../Conponents/UpdateUserForm';
import UserService from '../services/UserService';
import {useHistory} from 'react-router-dom'
import ClientPointsService from '../services/ClientPointsService';

const ClientProfilePage = () => {
    
    const [wantToUpdate, setWantToUpdate] = useState(false);
    const [activeUser, setActiveUser] = useState({});
    const [userPoints, setUserPoints] = useState({});
    const history = useHistory();
    const [userPenalties, setUserPenalties] = useState([{}]);
    const [numberOfPenalties, setnumberOfPenalties] = useState('');

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async() => {
        let user = JSON.parse(localStorage.getItem('activeUser'));
        setActiveUser(user);        
    }

    useEffect(() => {
        getUserPenalities();
    }, [activeUser])


    const getUserPenalities = async() => {

        let penalities = await ClientPointsService.getClientPenaltiesByUserId(activeUser.id);

        setUserPenalties(penalities.data)
        localStorage.setItem('usersPenalties', JSON.stringify(penalities.data))
        
    }

    useEffect(() => {
        getUserPoints();
    }, [userPenalties])
    
    const getUserPoints = async() => {

        let points = await ClientPointsService.getClientPointsById(activeUser.id);
        setUserPoints(points.data); 
        console.log(userPoints)   

        localStorage.setItem('usersPoints', JSON.stringify(points.data))
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

    
    return (
        <div className='container-box'>
            {
                !wantToUpdate ? 
                    <ProfileInfoBox 
                        updateProfile={updateProfile} 
                        activeUser={activeUser} 
                        deleteProfile={deleteProfile} 
                        userPoints={userPoints}
                        userPenalties={userPenalties}
                    /> 
                    : <UpdateUserForm confirmUpdate={confirmUpdate} activeUser={activeUser} cancelUpdate={cancelUpdate} />
            }
        </div>
    );
}

export default ClientProfilePage;
