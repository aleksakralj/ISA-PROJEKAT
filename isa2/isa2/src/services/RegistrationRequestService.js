import axios from 'axios';

const REGISTRATIONREQUESTS_API_BASE_URL = "http://localhost:8080/api/v1/registrationrequests";

class RegistrationRequestsService{

getRegistrationRequests(){
    return axios.get( REGISTRATIONREQUESTS_API_BASE_URL);
}
createRegistrationRequest(registrationRequest){
    return axios.post(REGISTRATIONREQUESTS_API_BASE_URL,registrationRequest);
}

}
export default new RegistrationRequestsService();
