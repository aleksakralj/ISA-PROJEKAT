import React from 'react';
import { useState, useEffect } from 'react';
import Feedback from '../Conponents/Feedback';
import BasicEntityInfo from '../Conponents/BasicEntityInfo';

const CottageWriteComplaint = () => {
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
            <Feedback activeEntityId={activeEntity.id} whichEntity={whichEntity}/>
        </div>
    );


}

export default CottageWriteComplaint;
