import axios from 'axios';

const CLIENTPOINTS_API_BASE_URL = "http://localhost:8080/api/v1/clientPoints";
const CLIENT_PENALTIES_API_BASE_URL = "http://localhost:8080/api/v1/clientPenalties";

class ClientPointsService {
    
    getClientPoints() {
        return axios.get(CLIENTPOINTS_API_BASE_URL);
    }

    createClientPoints(clientPoints){
            return axios.post(CLIENTPOINTS_API_BASE_URL,clientPoints);
    }

    getClientPointsById(clientPointsId){
        return axios.get(CLIENTPOINTS_API_BASE_URL+"/"+clientPointsId);
    }

    deleteClientPoints(clientPointsId){
        return axios.delete(CLIENTPOINTS_API_BASE_URL, + "/" + clientPointsId);
    }
    
    updateClientPoints(points, userId) {
        return axios.put(CLIENTPOINTS_API_BASE_URL + '/' + points + '/' + userId);
    }

    getClientPenalties() {
        return axios.get(CLIENT_PENALTIES_API_BASE_URL);
    }

    createClientPenalties(clientPenalties){
            return axios.post(CLIENT_PENALTIES_API_BASE_URL,clientPenalties);
    }

    getClientPenaltiesByUserId(clientPenaltiesId){
        return axios.get(CLIENT_PENALTIES_API_BASE_URL + "/" + clientPenaltiesId);
    }

    deleteClientPenalties(clientPenaltiesId){
        return axios.delete(CLIENT_PENALTIES_API_BASE_URL, + "/" + clientPenaltiesId);
    }


}
export default new ClientPointsService();