import axios from "axios";

const COMPLAINTS_API_BASE_URL = "http://localhost:8080/api/v1/complaints";

class ComplaintsService {
    
    getComplaints(){
        return axios.get(COMPLAINTS_API_BASE_URL);        
    }

    createComplaint(complaint){
        return axios.post(COMPLAINTS_API_BASE_URL,complaint);
    }

    viewComplaintById(complaintId){
        return axios.get(COMPLAINTS_API_BASE_URL + '/' + complaintId);
    }

    deleteComplaint(complaintId){
        return axios.delete(COMPLAINTS_API_BASE_URL+'/'+complaintId);
    }

}
export default new ComplaintsService();