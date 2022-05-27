import React from 'react';
import '../Assets/Styles/AdventureWriteFeedbackPage.css';
import ComplaintsService from '../services/ComplaintsService';
import { useEffect , useState} from 'react';

const Feedback = ({activeEntityId}) => {
    
    const [activeUser, setActiveUser] = useState({});
    const [message, setMessage] = useState('');

    const load = () => {
        setActiveUser(JSON.parse(localStorage.getItem('activeUser')));
    }

    useEffect(() => {
        load();
    },[])

    const sendFeedback = () => {

        let complenit = {
            clientId: activeUser.id, 
            adventureId: activeEntityId, 
            messaage: message
        }

        ComplaintsService.createEntityComplaint(complenit);
    }
    
    return (
        <div className='feedback-container'>
            <div className='feedback'>
                <h2>Message</h2>
                <textarea 
                    value={message} 
                    onChange={(e) => 
                        setMessage(e.target.value)
                    } 
                    className='feedback-text'
                ></textarea>
            </div>
            <button 
                className='feedback-send-button' 
                onClick={()=> sendFeedback()}>
                    Send feedback
            </button>
        </div>
    );
}

export default Feedback;
