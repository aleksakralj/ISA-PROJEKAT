import React from 'react';
import { useState, useEffect } from 'react';
import EntitySubscriptionsAPI from '../../services/EntitySubscriptionsAPI';
import EntitySubscriptionLane from '../../Conponents/EntitySubscriptionLane';
import '../../Assets/Styles/SubscriptionNavigatorPage.css'
import AdventureService from '../../services/AdventureService';
import CottageService from '../../services/CottageService';
import ShipService from '../../services/ShipService';

const SubscriptionNavigatorPage = () => {
    
    const [activeUser, setActiveUser] = useState({});
    const [adventures, setAdventures] = useState([]);
    const [ships, setShips] = useState([]);
    const [cottages, setCottages] = useState([]);
    const [subAdventures, setSubAdventures] = useState([]);
    const [subCottages, setSubCottages] = useState([]);
    const [subShips, setSubShips] = useState([]);
    
    const getInitialData = () => {
        let user = JSON.parse(localStorage.getItem('activeUser'));
        setActiveUser(user);
    }

    const loadSubData = async() => {

        let [adventuresSubs, shipSubs, cottageSubs] = await Promise.all([
            EntitySubscriptionsAPI.getAllAdventuresSubscriptionsForSpecificUser(activeUser.id),
            EntitySubscriptionsAPI.getAllShipsSubscriptionsForSpecificUser(activeUser.id),
            EntitySubscriptionsAPI.getAllCottagesSubscriptionsForSpecificUser(activeUser.id)
        ]) 

        setAdventures(adventuresSubs.data);    
        setShips(shipSubs.data);
        setCottages(cottageSubs.data);
    }

    const findSubbedAdventures = async() => {

        let responses = []
        for (let i = 0; i<adventures.length; i++) {

            let response = await AdventureService.getAdventureById(adventures[i].adventureId);
            responses.push(response.data);
        }

        setSubAdventures(responses)
    }

    const findSubbedCottages = async() => {
        let responses = []
        for (let i = 0; i<cottages.length; i++) {

            let response = await CottageService.getCottageById(cottages[i].cottageId);
            responses.push(response.data);
        }

        setSubCottages(responses);
    }

    
    const findSubbedShips = async() => {
        let responses = []

        for (let i = 0; i<ships.length; i++) {

            let response = await ShipService.getShipById(ships[i].shipId);
            responses.push(response.data);
        }
        
        setSubShips(responses);
    }

    useState(() => {
        findSubbedShips();
    }, [ships])

    useEffect(() => {
        findSubbedCottages();
    },[cottages])

    useEffect(() => {
        findSubbedAdventures();
    }, [adventures])

    useEffect(() => {
        getInitialData();
    },[])

    useEffect(() => {
        loadSubData();
    },[activeUser]);

    return (
        <div className='entity-subscription-view-container'>
            <EntitySubscriptionLane 
                passData={subAdventures} 
                flag='Adventures' 
                imageAddress='https://canary.contestimg.wish.com/api/webimage/5b15352ca309e469b826391d-large.jpg?cache_buster=36f19fa8a1cf6d50c7186334519ccc60' />
            <EntitySubscriptionLane 
                passData={subShips} 
                flag='Ships' 
                imageAddress='https://d1bd5u3q1t3nu7.cloudfront.net/icons/50/cargo-ship-icon.png' />
            <EntitySubscriptionLane 
                passData={subCottages} 
                flag='Cottages' 
                imageAddress='https://cdn-icons-png.flaticon.com/512/20/20176.png'/>
        </div>
    );
}

export default SubscriptionNavigatorPage;
