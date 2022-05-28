import React, {useState, useEffect} from 'react';
import '../Assets/Styles/ShipProfilePage.css'
import EntitySubscriptionsAPI from '../services/EntitySubscriptionsAPI';

const ShipProfilePage = () => {

    const [ship, setShip] = useState({});
    const [activeUser, setActiveUser] = useState({});
    const [subscribed, setSubscribed] = useState(false);
    const [buttonCaption, setButtonCaption] = useState('Subscribe');

    const getShipInfo = () => {
        let s = JSON.parse(localStorage.getItem('activeShip'))

        setShip(s);
        
    }

    const getUserInfo = () => {
        let user = JSON.parse(localStorage.getItem('activeUser'));
        setActiveUser(user);
    }

    const subscribeToShip = () => {

        if(subscribed === false) {
            let subscription = {userId: activeUser.id, shipId : ship.id}

            EntitySubscriptionsAPI.createShipSubscription(subscription);
            alert('You subscribed successfully')
            setSubscribed(true)
        }
        else if (subscribed === true) {
            EntitySubscriptionsAPI.deleteShipSubscriptionByUserIdAndShipId(activeUser.id, ship.id);
            setSubscribed(false);
        }
    }

    const checkIfSubbed = async() => {
        let response = await EntitySubscriptionsAPI.getAdventureSubscriptionByIds(activeUser.id, ship.id)
        let nesto = response.data;

        if(!Object.keys(nesto).length){
            setSubscribed(false);
        }
        else(setSubscribed(true))
    }

    const buttonCaptionChange = () => {
        if(subscribed === true) {
            setButtonCaption('Unsubscribe')
        }
        else {
            setButtonCaption('Subscribe') 
        }
    }

    useEffect(() => {
        getShipInfo();
        getUserInfo();
        checkIfSubbed();
    },[]);

    useEffect(() => {
        buttonCaptionChange();
    },[subscribed])

    return (
        <div className='ship-profile-container'>
            <div className='ship-caption-content'>               
                <div className='ship-properties'>
                    <div className='basic-ship-info'>
                        <h2>{ship.name}</h2>
                        <p>{ship.address}</p>
                        <div className='owner-data'>
                            <h5>Aca faca</h5>
                            <button
                                onClick={()=> subscribeToShip()}
                            >{buttonCaption}</button>
                        </div>
                        <p>{ship.capacity}</p>
                    </div>
                <img className='ship-image' src='https://slatefallsoutposts.com/wp-content/uploads/2019/11/slid1450.jpg'></img>
                </div>
            </div>

            <div className='ship-content-container'>
            <div className='ship-itmes-container'>
                    <div className='ship-additional-info-box'>
                        <h5>Fishing equipment</h5>
                        <p>{ship.fishingEquipment}</p>
                    </div>
                    <div className='ship-additional-info-box'>
                        <h5>Additional services</h5>
                        <p>{ship.additionalServices}</p>    
                    </div>
                </div>
                <div className='ship-description-prices-container'>
                    <div className='ship-description'>
                        <h5>Description</h5>
                        <p>{ship.description}</p>
                    </div>
                    <div className='ship-configuration'>
                        <p>Type: {ship.type}</p>
                        <p>{ship.length} meters long</p>
                        <p>{ship.numberOfEngines} ENGINES</p>
                        <p>Speed: {ship.topSpeed} KM/H</p>
                        <p>Power: {ship.hp} HORSE POWER</p>
                    </div>
                </div>

                <div className='ship-rules-container'>
                    <div className='ship-additional-info-box'>
                        <h5>Rules of conduct</h5>
                        <p>{ship.rules}</p>
                    </div>
                    <div className='ship-additional-info-box'>
                        <h5>Terms of reservation</h5>
                        <p>{ship.termsOfReservation}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ShipProfilePage;
