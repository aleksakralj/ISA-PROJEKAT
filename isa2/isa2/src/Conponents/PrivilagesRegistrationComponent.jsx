import React, {useState, useCallback} from 'react';

const PrivilagesRegistrationComponent = () => {
    
    const [userType, setUserType] = useState('Client')

    return (
        <div className='privilages-registration-container'>
            <label className='privilages-registration-caption'> 
                Choose your role:
            </label>
            <div className='privilages-registration-choosing-form'>
                <div className='privilages-registration-role-choosing-container'>
                    <div className='privilages-registration-radio-buttons'>
                        <input name='roleRadioButton' 
                            value='admin' 
                            type='radio' 
                            onClick={e=>{setUserType(e.target.value)}} 
                        />
                        <input name='roleRadioButton' 
                            value='fishing_instructor' 
                            type='radio' 
                            onClick={e=>{setUserType(e.target.value)}}
                        />
                        <input name='roleRadioButton' 
                            value='ship_owner' 
                            type='radio' 
                            onClick={e=>{setUserType(e.target.value)}}
                        />
                        <input name='roleRadioButton' 
                            value='cottage_owner' 
                            type='radio' 
                            onClick={e=>{setUserType(e.target.value)}}
                        />
                    </div>
                    <div className='privilages-registration-labels'>
                        <label>Admin</label>
                        <label>Fishing Instructor</label>
                        <label>Ship Owner</label>
                        <label>Cottage Owner</label>    
                    </div>
                </div>
                <input className='privilages-registration-reason-input' 
                    placeholder='Reason for privilages'
                />
                <div className='privilages-registration-buttons'>
                    <button className='registration-button'>Register</button>
                    <button className='registration-button'>Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default PrivilagesRegistrationComponent;
