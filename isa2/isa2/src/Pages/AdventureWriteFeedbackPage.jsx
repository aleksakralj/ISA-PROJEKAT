import React from 'react';
import { useEffect, useState } from 'react';
import Feedback from '../Conponents/Feedback';
import BasicEntityInfo from '../Conponents/BasicEntityInfo';
import '../Assets/Styles/AdventureWriteFeedbackPage.css';
import RateEntity from '../Conponents/RateEntity';

const AdventureWriteFeedbackPage = () => {

    const [activeEntity, setActiveEntity] = useState({});
    const [whichEntity, setWhichEntity] = useState('');
    


    const checkEntityType = () => {

        if(!(localStorage.getItem('isAdventure') === null)){
            setWhichEntity('adventure');
        }
        else if(!(localStorage.getItem('isCottage')=== null)){
            setWhichEntity('cottage');
        }
        else if(!(localStorage.getItem('ship')===null)){
            setWhichEntity('ship');
        }        
    }


    useEffect(() => {

        setActiveEntity(JSON.parse(localStorage.getItem('activeEntity')));        
        checkEntityType();
    },[])


    return (

        <div className='adventure-feedback-page-container'>
            <h1 style={{marginTop: '30px'}}>Write your feedback</h1>
            <BasicEntityInfo activeEntity={activeEntity}/>
            <div className='type-of-feedback-container'>
                <Feedback activeEntityId={activeEntity.id} whichEntity={whichEntity}/>       
                <RateEntity activeEntityId={activeEntity.id} whichEntity={whichEntity}/>
            </div>
        </div>
    );
}

export default AdventureWriteFeedbackPage;
