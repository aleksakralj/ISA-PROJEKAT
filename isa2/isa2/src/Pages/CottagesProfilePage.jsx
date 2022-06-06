import React, {useState, useEffect} from 'react';
import '../Assets/Styles/CottageProfilePage.css'
import EntitySubscriptionsAPI from '../services/EntitySubscriptionsAPI';
import {useHistory} from 'react-router-dom';
import CottageRatingCalculatorAPI from '../services/CottageRatingCalculatorAPI';

const CottageProfilePage = () => {

    const [cottage, setCottage] = useState({});
    const [activeUser, setActiveUser] = useState({});
    const [subscribed, setSubscribed] = useState(false);
    const [buttonCaption, setButtonCaption] = useState('Subscribe');
    const history = useHistory();
    const [cottageRating, setCottageRating] = useState('');
    const [hideComponents, setHideComponents] = useState(false);


    const getCottageInfo = () => {
        let cott = JSON.parse(localStorage.getItem('activeCottage'))
        setCottage(cott);        
    }

    const getUserInfo = () => {
        let user = JSON.parse(localStorage.getItem('activeUser'));
        
        if(user === null) {
            setHideComponents(false)
        }
        else {
            setActiveUser(user);
            setHideComponents(true)
        }

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

    const scheduleCottage = () => {
        history.push('/schedule-cottage/' + cottage.id)
    }

    useEffect(() => {
        getCottageInfo();
        getUserInfo();
        checkIfSubbed();
    },[]);

    useEffect(() => {
        buttonCaptionChange();
    },[subscribed])

    useEffect(() => {
        getCottageRating();
    }, [cottage])

    const getCottageRating = async() => {

        let response =  await CottageRatingCalculatorAPI.getByCottageId(cottage.id)
        setCottageRating(response.data);        
    }

    return (
        <div className='cottage-profile-page-container'>
             <div className='cottage-caption-content'>               
                
                {
                hideComponents ?
                <button className='appointments-button'
                    onClick={() => scheduleCottage()}
                >
                    Schedule Cottage
                </button>
                : null
                }
                
                <div className='cottage-properties'>
                    <div className='basic-cottage-info'>
                        <h2>{cottage.name}</h2>
                        <p>{cottage.address}</p>
                        <p>Rating: {cottageRating.finalRating}</p>
                        <div className='owner-data'>
                            <h5>Aca faca</h5>

                        { hideComponents? 
                            <button
                                onClick={()=> subscribeToCottage()}
                            >{buttonCaption}</button>
                            : null
                        }
                        
                        </div>
                        <p>{cottage.numberOfRooms}</p>
                    </div>
                <img className='cottage-image' src='https://slatefallsoutposts.com/wp-content/uploads/2019/11/slid1450.jpg'></img>
                </div>

                {
                    hideComponents?
                <button 
                    className='appointments-button'
                    onClick={() => checkQuickAppointments()}>
                        Check Quick Appointments
                </button>
                    :null
                }
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
