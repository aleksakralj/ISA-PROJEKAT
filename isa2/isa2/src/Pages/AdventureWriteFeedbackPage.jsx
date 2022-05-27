import React from 'react';
import { useEffect, useState } from 'react';
import Feedback from '../Conponents/Feedback';
import BasicEntityInfo from '../Conponents/BasicEntityInfo';
import '../Assets/Styles/AdventureWriteFeedbackPage.css';

const AdventureWriteFeedbackPage = () => {

    const [activeEntity, setActiveEntity] = useState({});

    useEffect(() => {
        
        setActiveEntity( JSON.parse(localStorage.getItem('activeEntity')));
    },[])

    return (
        <div className='adventure-feedback-page-container'>
            <h1 style={{marginTop: '30px'}}>Write your feedback</h1>
            <BasicEntityInfo activeEntity={activeEntity}/>
            <Feedback activeEntityId={activeEntity.id}/>
        </div>
    );
}

export default AdventureWriteFeedbackPage;
