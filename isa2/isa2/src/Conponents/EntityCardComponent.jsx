import React,{useState} from 'react';
import '../Assets/Styles/HomepageClient.css'


const EntityCardComponent = ({imageAddress, title, buttonText}) => {
    return (
        <div>
            <div className='entity-card'>
                <img className='entity-card-image' src={imageAddress} />
                <div className='entity-card-data'>
                    <h3>{title}</h3>
                    <button className='entity-card-button'>{buttonText}</button>
                </div>
            </div>             
        </div>
    );
}

export default EntityCardComponent;
