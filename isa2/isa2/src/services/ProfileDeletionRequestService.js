import axios from "axios";

const PROFILEDELETIONREQUESTS_API_BASE_URL = "http://localhost:8080/api/v1/profiledeletionrequests";

class ProfileDeletionRequestService {
    
    getProfileDeletionRequests(){
        return axios.get(PROFILEDELETIONREQUESTS_API_BASE_URL);        
    }

    createProfileDeletionRequest(profileDeletionRequest){
        return axios.post(PROFILEDELETIONREQUESTS_API_BASE_URL,profileDeletionRequest);
    }

    viewProfileDeletionRequestById(requestId){
        return axios.get(PROFILEDELETIONREQUESTS_API_BASE_URL + '/' + requestId);
    }

    deleteProfileDeletionRequest(requestId){
        return axios.delete(PROFILEDELETIONREQUESTS_API_BASE_URL+''+requestId);
    }

}
export default new ProfileDeletionRequestService();