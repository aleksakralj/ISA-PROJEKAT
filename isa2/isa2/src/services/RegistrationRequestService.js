import axios from 'axios';

const REGISTRATIONREQUESTS_API_BASE_URL = "http://localhost:8080/api/";

class RegistrationRequestsService{

getRegistrationRequests(){
    return axios.get( REGISTRATIONREQUESTS_API_BASE_URL);
}

}
export default new RegistrationRequestsService();
