import axios from "axios";

const GRADEREQUESTS_API_BASE_URL = "http://localhost:8080/api/v1/graderequests";

class GradeRequestService {
    
    getGradeRequests(){
        return axios.get(GRADEREQUESTS_API_BASE_URL);        
    }

    createGradeRequest(grade){
        return axios.post(GRADEREQUESTS_API_BASE_URL,grade);
    }

    viewGradeRequestById(gradeId){
        return axios.get(GRADEREQUESTS_API_BASE_URL + '/' + gradeId);
    }

    deleteGradeRequest(gradeId){
        return axios.delete(GRADEREQUESTS_API_BASE_URL+'/'+gradeId);
    }

}
export default new GradeRequestService();