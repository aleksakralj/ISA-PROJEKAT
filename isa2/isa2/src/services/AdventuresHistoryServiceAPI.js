import axios from "axios";

const ADVENTURE_HISTORY_API_BASE_URL = "http://localhost:8080/api/v1/adventurehistoryappointments";

class AdventuresHistoryServiceAPI {

    getAll(){
        return axios.get(ADVENTURE_HISTORY_API_BASE_URL);
    }

    create(adventure) {
        return axios.post(ADVENTURE_HISTORY_API_BASE_URL+ '/' + adventure);
    }

    getById(adventureId) {
        return axios.get(ADVENTURE_HISTORY_API_BASE_URL + '/' + adventureId);
    }

    update(adventure, adventureId) {
        return axios.put(ADVENTURE_HISTORY_API_BASE_URL + '/' + adventureId + '/'+ adventure);
    }       
    
    delete(adventureId) {
        return axios.delete(ADVENTURE_HISTORY_API_BASE_URL + '/' + adventureId);
    }

    getAdventureHistoryAppointmentByUserId(clientId) {
        return axios.get(ADVENTURE_HISTORY_API_BASE_URL + '/' + clientId);
    }

}

export default new AdventuresHistoryServiceAPI();