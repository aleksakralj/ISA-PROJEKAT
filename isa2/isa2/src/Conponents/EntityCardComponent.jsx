import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import '../Assets/Styles/HomepageClient.css'


const EntityCardComponent = ({imageAddress, title, buttonText, buttonClickLink}) => {    
    const history = useHistory();
    const entityButtonClick = () => {
        let path = buttonClickLink;
        history.push(path);
    }
    return (
        <div>
            <div className='entity-card'>
                <img className='entity-card-image' 
                    src={imageAddress} 
                />
                <div className='entity-card-data'>
                    <h3>{title}</h3>
                    <button onClick={entityButtonClick} 
                    className='entity-card-button'>{buttonText}</button>
                </div>
            </div>             
        </div>
    );
}

export default EntityCardComponent;
