import axios from "axios";

const COTTAGE_HISTORY_API_BASE_URL = "http://localhost:8080/api/v1/cottagehistoryappointments";

class CottagesHistoryServiceAPI {

    getAll(){
        return axios.get(COTTAGE_HISTORY_API_BASE_URL);
    }

    create(cottage) {
        return axios.post(COTTAGE_HISTORY_API_BASE_URL+ '/' + cottage);
    }

    getById(cottageId) {
        return axios.get(COTTAGE_HISTORY_API_BASE_URL + '/' + cottageId);
    }

    update(cottage, cottageId) {
        return axios.put(COTTAGE_HISTORY_API_BASE_URL + '/' + cottageId + '/'+ cottage);
    }       
    
    delete(cottageId) {
        return axios.delete(COTTAGE_HISTORY_API_BASE_URL + '/' + cottageId);
    }

    getCottageHistoryAppointmentByUserId(clientId) {
        return axios.get(COTTAGE_HISTORY_API_BASE_URL + '/' + clientId);
    }

}

export default new CottagesHistoryServiceAPI();