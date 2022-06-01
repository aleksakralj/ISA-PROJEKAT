import React from 'react';
import '../Assets/Styles/AdventureWriteFeedbackPage.css';
import ComplaintsService from '../services/ComplaintsService';
import { useEffect , useState} from 'react';
import ClientPointsService from '../services/ClientPointsService';

const Feedback = ({activeEntityId, whichEntity}) => {
    
    const [activeUser, setActiveUser] = useState({});
    const [message, setMessage] = useState('');

    const load = () => {
        
        setActiveUser(JSON.parse(localStorage.getItem('activeUser')));

    }

    useEffect(() => {
        load();
    },[])

    const sendFeedback = () => {

        if(whichEntity === 'adventure') {
            
            let complaint = {clientId : activeUser.id, adventureId: activeEntityId, message: message}

            ComplaintsService.createAdventureComplaint(complaint);
            updatePoints();
            alert('You successfully created feedback')
        }
        else if(whichEntity === 'ship') {
            let complaint = {clientId: activeUser.id, shipId: activeEntityId, message: message}
            
            ComplaintsService.createShipComplaint(complaint)
            updatePoints();
            alert('You successfully created feedback')
        }
        else if(whichEntity === 'cottage') {
            let complaint = {clientId: activeUser.id, cottageId: activeEntityId, message: message}
            
            ComplaintsService.createCottageComplaint(complaint);
            updatePoints();
            alert('You successfully created feedback')
        }
    }

    const updatePoints = () => {
        let points = 20;
        ClientPointsService.updateClientPoints(points, activeUser.id)
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
