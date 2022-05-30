import React from 'react';
import '../Assets/Styles/SubscriptionNavigatorPage.css'
import { useState, useEffect } from 'react';
import EntitySubscriptionsAPI from '../services/EntitySubscriptionsAPI';


const EntitySubscriptionLane = ({passData, flag, imageAddress}) => {

    const [activeUser, setActiveUser] = useState({});

    useEffect(() => {
        getUser();
    }, [])

    const getUser = () => {
        let user = JSON.parse(localStorage.getItem('activeUser'));
        setActiveUser(user);
    }

    const unsub = (id) => {

        if(flag === 'Adventures') {
            EntitySubscriptionsAPI.deleteAdventureSubscriptionByUserIdAndAdventureId(activeUser.id, id);
            window.location.reload(false);            
        }
        
        else if( flag === 'Ships') {
            EntitySubscriptionsAPI.deleteShipSubscriptionByUserIdAndShipId(activeUser.id, id )
            window.location.reload(false);
        }

        else if( flag === 'Cottages') {
            EntitySubscriptionsAPI.deleteCottageSubscriptionByUserIdAndCottageId(activeUser.id, id)
            window.location.reload(false);
        }

    }

    return (
        <div className='subscription-lane'>
            <div className='caption-box'>
                <h4 className='caption'>{flag} Subs:</h4>
                <img className='picture' src={imageAddress}></img>
            </div>
            <ul className='subscription-list'>
                {
                passData.map((data) => {
                    const {
                        id,
                        name
                    } = data;
                    return (
                        <div className='subscription-card' key={id}>
                            <label>
                                {name}
                            </label>
                            <button onClick={() => unsub(id)}>Unsub</button>
                        </div>
                    )})
                }
            </ul>
        </div>
    );
}

export default EntitySubscriptionLane;
