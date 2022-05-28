import React, {useState, useEffect} from 'react';
import '../Assets/Styles/AdventureProfilePage.css'
import EntitySubscriptionsAPI from '../services/EntitySubscriptionsAPI';

const AdventureProfilePage = () => {

    const [adventure, setAdventure] = useState({});
    const [activeUser, setActiveUser] = useState({});
    const [subscribed, setSubscribed] = useState(null);
    const [buttonCaption, setButtonCaption] = useState('Subscribe');
    
    const getAdventureInfo = () => {
        
        let adv = JSON.parse(localStorage.getItem('activeAdventure'))
        
        setAdventure(adv);
    }

    const getUserInfo = () => {

        let usr = JSON.parse(localStorage.getItem('activeUser'))
        setActiveUser(usr);
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

    return (
        <div className='adventure-profile-container'>
            <div className='adventure-caption-content'>               
                <div className='adventure-properties'>
                    <div className='basic-adventure-info'>
                        <h2>{adventure.name}</h2>
                        <p>Address: {adventure.address}</p>
                        <p>Rating: </p>
                        <div className='instructor-data'>
                            <h5>Aca faca</h5>
                            <button 
                                onClick={() => subscribeToAdventure()}
                            >{buttonCaption}</button>
                        </div>
                        <p>Max people: {adventure.maxPeople}</p>
                    </div>
                <img className='adventure-image' src='https://slatefallsoutposts.com/wp-content/uploads/2019/11/slid1450.jpg'></img>
                </div>
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
