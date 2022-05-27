import React from 'react';
import '../Assets/Styles/AdventureWriteFeedbackPage.css';

const BasicEntityInfo = ({activeEntity}) => {
    return (
        <div className='entity-info-container'>
            <h4 className='entiy-navigator'>
                For
            </h4>
            <div className='entity-info'>
                <div className='info-box'>
                    <label>name</label>
                    <input contentEditable='false' value={activeEntity.name}></input>
                </div>
                <div className='info-box'>
                    <label>owner</label>
                    <input contentEditable='false' value={activeEntity.id}></input>
                </div>
                <div className='info-box'>
                    <label>price</label>
                    <input contentEditable='false' value={activeEntity.price}></input>
                </div>
            </div>
        </div>
    );
}

export default BasicEntityInfo;
