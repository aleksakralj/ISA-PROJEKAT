import React, {useState, useEffect} from 'react';
import '../Assets/Styles/CottageProfilePage.css'
import EntitySubscriptionsAPI from '../services/EntitySubscriptionsAPI';
import {useHistory} from 'react-router-dom';

const CottageProfilePage = () => {

    const [cottage, setCottage] = useState({});
    const [activeUser, setActiveUser] = useState({});
    const [subscribed, setSubscribed] = useState(false);
    const [buttonCaption, setButtonCaption] = useState('Subscribe');
    const history = useHistory();

    const getCottageInfo = () => {
        let cott = JSON.parse(localStorage.getItem('activeCottage'))
        setCottage(cott);        
    }

    const getUserInfo = () => {
        let user = JSON.parse(localStorage.getItem('activeUser'));
        setActiveUser(user);
    }

    const subscribeToCottage = () => {

        if(subscribed === false) {
            let subscriptiom = {userId: activeUser.id, cottageId : cottage.id }
            EntitySubscriptionsAPI.createCottageSubscription(subscriptiom);
            alert('You subscribed successfully')
            setSubscribed(true);
            
        }
        else if(subscribed === true) {
            EntitySubscriptionsAPI.deleteCottageSubscriptionByUserIdAndCottageId(activeUser.id, cottage.id)
            setSubscribed(false);
        }
    }

    const checkIfSubbed = async() => {
        
        let response = await EntitySubscriptionsAPI.getCottagesSubscriptionByIds(activeUser.id, cottage.id);
        let nesto = response.data;

    
        if(!Object.keys(nesto).length){
            setSubscribed(false);
        }
        else{
            setSubscribed(true)
        }
    }


    const buttonCaptionChange = () => {
        if(subscribed === true ) {
            setButtonCaption('Unsubscribe') 
        }
        else {
            setButtonCaption('Subscribe')
        }
    }

    const checkQuickAppointments = () => {
        history.push('/cottage-quick-appointment/' + cottage.id)
    }

    useEffect(() => {
        getCottageInfo();
        getUserInfo();
        checkIfSubbed();
    },[]);

    useEffect(() => {
        buttonCaptionChange();
    },[subscribed])

    return (
        <div className='cottage-profile-page-container'>
             <div className='cottage-caption-content'>               
                <button className='appointments-button'>
                    Check Free Terms
                </button>
                <div className='cottage-properties'>
                    <div className='basic-cottage-info'>
                        <h2>{cottage.name}</h2>
                        <p>{cottage.address}</p>
                        <div className='owner-data'>
                            <h5>Aca faca</h5>
                            <button
                                onClick={()=> subscribeToCottage()}
                            >{buttonCaption}</button>
                        </div>
                        <p>{cottage.numberOfRooms}</p>
                    </div>
                <img className='cottage-image' src='https://slatefallsoutposts.com/wp-content/uploads/2019/11/slid1450.jpg'></img>
                </div>
                <button 
                    className='appointments-button'
                    onClick={() => checkQuickAppointments()}>
                        Check Quick Appointments
                </button>
            </div>
            
            <div className='cottage-content-container'>
                <div className='cottage-content-box'>
                    <h4>Description</h4>
                    <p>{cottage.description}</p>
                </div>
                <div className='cottage-content-box'>
                    <h4>Rules</h4>
                    <p>{cottage.rules}</p>
                </div>

            </div>

        </div>
    );
}

export default CottageProfilePage;
