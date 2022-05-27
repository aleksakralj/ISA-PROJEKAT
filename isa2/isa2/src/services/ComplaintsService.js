import axios from "axios";

const COMPLAINTS_API_BASE_URL = "http://localhost:8080/api/v1/complaints";
const ADVENTURE_COMPLAINTS_API_BASE_URL = 'http://localhost:8080/api/v1/adventureComplaints';
const SHIP_COMPLAINTS_API_BASE_URL = 'http://localhost:8080/api/v1/shipComplaints';
const COTTAGE_COMPLAINTS_API_BASE_URL = 'http://localhost:8080/api/v1/cottageComplaints';

class ComplaintsService {
    
    getComplaints(type){
        return axios.get(COMPLAINTS_API_BASE_URL + '/' + type);        
    }

    createComplaint(complaint){
        return axios.post(COMPLAINTS_API_BASE_URL,complaint);
    }

    viewComplaintById(complaintId,type){
        return axios.get(COMPLAINTS_API_BASE_URL + '/' + type + '/' + complaintId);
    }

    deleteComplaint(complaintId,type){
        return axios.delete(COMPLAINTS_API_BASE_URL + '/' + type + '/' + complaintId);
    }

    createAdventureComplaint(complaint) {
        return axios.post(ADVENTURE_COMPLAINTS_API_BASE_URL , complaint);
    }

    createShipComplaint(complaint){
        return axios.post(SHIP_COMPLAINTS_API_BASE_URL, complaint);
    }

    createCottageComplaint(complaint){
        return axios.post(COTTAGE_COMPLAINTS_API_BASE_URL, complaint);
    }    


}
export default new ComplaintsService();