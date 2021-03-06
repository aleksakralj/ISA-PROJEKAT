import React, {useState, useEffect} from 'react';
import '../Assets/Styles/AdventureProfilePage.css'
import EntitySubscriptionsAPI from '../services/EntitySubscriptionsAPI';
import {useHistory} from 'react-router-dom'
import AdventureRatingCalculatorAPI from '../services/AdventureRatingCalculatorAPI';

const AdventureProfilePage = () => {

    const [adventure, setAdventure] = useState({});
    const [activeUser, setActiveUser] = useState({});
    const [subscribed, setSubscribed] = useState(false);
    const [buttonCaption, setButtonCaption] = useState('');
    const history = useHistory();  
    const [adventureRating, setAdventureRating] = useState('');
    const [hideComponents, setHideComponents] = useState(false);

    const getAdventureInfo = () => {
        
        let adv = JSON.parse(localStorage.getItem('activeAdventure'))
        
        setAdventure(adv);
    }

    const getUserInfo = () => {

        let usr = JSON.parse(localStorage.getItem('activeUser'))
        if(usr === null) {
            setHideComponents(false);
        }
        else {
        setActiveUser(usr);
        setHideComponents(true)
        }
    }

    const subscribeToAdventure = () => {
    
        if(subscribed === false) {
            let subscription = {userId: activeUser.id, adventureId: adventure.id}
            EntitySubscriptionsAPI.createAdventureSubscription(subscription)
            alert('You subscribed successfully')
            setSubscribed(true);
        }

        else if (subscribed === true) {
            EntitySubscriptionsAPI.deleteAdventureSubscriptionByUserIdAndAdventureId(activeUser.id, adventure.id)
            setSubscribed(false);
        }
    }

    const checkIfSubbed = async() => {
        
        let response = await EntitySubscriptionsAPI.getAdventureSubscriptionByIds(activeUser.id, adventure.id);
        let nesto = response.data;
        
        if(!Object.keys(nesto).length){
            setSubscribed(false);
        }
        else{
            setSubscribed(true)
        }
    }

    const buttonCaptionChange = () => {
        
        if(subscribed === true) {
            setButtonCaption('Unsubscribe')
        }
        else{
            setButtonCaption('Subscribe')
        }
    }

    
    useEffect(() => {
        getAdventureInfo();
        getUserInfo();
        checkIfSubbed();
    },[]);

    useEffect(() => {
        buttonCaptionChange();
    }, [subscribed])

    useEffect(() => {
        getAdventuresRating();
    }, [adventure])


    const getAdventuresRating = async() => {

        let response = await AdventureRatingCalculatorAPI.getByIdAdventure(adventure.id);
        setAdventureRating(response.data);
    }

    const checkFreeTerms = () => {
        history.push('/schedule-adventure-appointment/' + adventure.id);
    }

    const checkQuickAppointments = () => {
        history.push('/adventure-quick-appointment/' + adventure.id);
    }

    return (
        <div className='adventure-profile-container'>
            <div className='adventure-caption-content'>               
                
                { hideComponents ?       
                <button className='appointments-button' onClick={() => checkFreeTerms()}>
                    Schedule this adventure
                </button>
                : null    
                }

                <div className='adventure-properties'>
                    <div className='basic-adventure-info'>
                        <h2>{adventure.name}</h2>
                        <p>Address: {adventure.address}</p>
                        <p>Rating: {adventureRating.finalRating}</p>
                        <div className='instructor-data'>
                            <h5>Aca faca</h5>
                       
                        { hideComponents?
                            <button 
                                onClick={() => subscribeToAdventure()}
                            >{buttonCaption}</button>
                            :null
                        }
                        </div>
                        <p>Max people: {adventure.maxPeople}</p>
                    </div>
                <img className='adventure-image' src='https://slatefallsoutposts.com/wp-content/uploads/2019/11/slid1450.jpg'></img>
                </div>
                
                {hideComponents ?
                <button className='appointments-button' onClick={() => checkQuickAppointments()}>
                    Check Quick appointments
                </button>
                : null
                }
            
            </div>

            <div className='adventure-content-container'>
                <div className='adventure-itmes-container'>
                    <div className='adventure-additional-info-box'>
                        <h5>Fishing equipment</h5>
                        <p>{adventure.fishingEquipment}</p>
                    </div>
                    <div className='adventure-additional-info-box'>
                        <h5>Additional services</h5>
                        <p>{adventure.additionalServices}</p>    
                    </div>
                </div>
                <div className='adventure-description-prices-container'>
                    <div className='adventure-description'>
                        <h5>Description</h5>
                        <p>{adventure.description}</p>
                    </div>
                    <div className='adventure-prices'>
                        <p>sadsadasdasdjasdjaskdjaskdjaskjdksajdkashdasd</p>
                    </div>
                </div>

                <div className='adventure-rules-container'>
                    <div className='adventure-additional-info-box'>
                        <h5>Rules of conduct</h5>
                        <p>{adventure.rulesOfConduct}</p>
                    </div>
                    <div className='adventure-additional-info-box'>
                        <h5>Terms of reservation</h5>
                        <p>{adventure.termsOfReservation}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AdventureProfilePage;
