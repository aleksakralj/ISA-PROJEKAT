import React from 'react';
import '../Assets/Styles/SubscriptionNavigatorPage.css'
import { useState, useEffect } from 'react';

const EntitySubscriptionLane = ({passData, flag, imageAddress}) => {

    const [adventures, setadventures] = useState([]);
    const [cottages, setcottages] = useState([]);
    const [ships, setships] = useState([]);

    const loadData = () => {

        if(flag === 'Adventures'){
            setadventures(passData);
        }

        else if(flag === 'Cottages') {
            setcottages(passData)
        }

        else if(flag === 'Ships') {
            setships(passData)
        }

    }

    useEffect(()=> {
        loadData();    
    },[])

    return (
        <div className='subscription-lane'>
            <div className='caption-box'>
                <h4 className='caption'>{flag} Subs:</h4>
                <img className='picture' src={imageAddress}></img>
            </div>
            <div className='subscription-card'>
                <label>
                    {passData.name}
                </label>
                <button>Unsub</button>
            </div>
        </div>
    );
}

export default EntitySubscriptionLane;
