import axios from 'axios';

const REGISTRATIONREQUESTS_API_BASE_URL = "http://localhost:8080/api/v1/registrationrequests";

const USERS_API_BASE_URL = "http://localhost:8080/api/v1/users";

/*const REGISTRATIONREQUESTS_API_BASE_URL_FI = "http://localhost:8080/api/v1/users";
const REGISTRATIONREQUESTS_API_BASE_URL_SO = "http://localhost:8080/api/v1/shipowners";
const REGISTRATIONREQUESTS_API_BASE_URL_CO = "http://localhost:8080/api/v1/cottageowners";
const REGISTRATIONREQUESTS_API_BASE_URL_U = "http://localhost:8080/api/v1/users";*/


class RegistrationRequestsService{

getRegistrationRequests(){
    return axios.get( REGISTRATIONREQUESTS_API_BASE_URL);
}
/*createRegistrationRequest(registrationRequest){
    return axios.post(REGISTRATIONREQUESTS_API_BASE_URL,registrationRequest);
}
*/
createRegistrationRequest(request){
    return axios.post(REGISTRATIONREQUESTS_API_BASE_URL, request);
}


createUser(request){
    return axios.post(USERS_API_BASE_URL, request);
}

/*
createRegistrationRequestSO(request){
    return axios.post(REGISTRATIONREQUESTS_API_BASE_URL_SO, request);
}
createRegistrationRequestCO(request){
    return axios.post(REGISTRATIONREQUESTS_API_BASE_URL_CO, request);
}
createRegistrationRequestU(request){
    return axios.post(REGISTRATIONREQUESTS_API_BASE_URL_U, request);
}*/

viewRequest(id){
    return axios.put(REGISTRATIONREQUESTS_API_BASE_URL + '/' + id);
}

getRegistrationRequestById(requestId){
    return axios.get(REGISTRATIONREQUESTS_API_BASE_URL + '/' + requestId);
}

deleteRegistrationRequest(requestId){
    return axios.delete(REGISTRATIONREQUESTS_API_BASE_URL + '/' + requestId);
}

}
export default new RegistrationRequestsService();
