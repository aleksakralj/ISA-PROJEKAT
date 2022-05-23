import axios from "axios";

const SHIPS_HISTORY_API_BASE_URL = "http://localhost:8080/api/v1/shiphistoryappointments";

class PastShipsAppointmentAPI {

    getAll(){
        return axios.get(SHIPS_HISTORY_API_BASE_URL);
    }

    create(ship) {
        return axios.post(SHIPS_HISTORY_API_BASE_URL+ '/' + ship);
    }

    getById(shipId) {
        return axios.get(SHIPS_HISTORY_API_BASE_URL + '/' + shipId);
    }

    update(ship, shipId) {
        return axios.put(SHIPS_HISTORY_API_BASE_URL + '/' + shipId + '/'+ ship);
    }       
    
    delete(shipId) {
        return axios.delete(SHIPS_HISTORY_API_BASE_URL + '/' + shipId);
    }

    getShipHistoryAppointmentByUserId(clientId) {
        return axios.get(SHIPS_HISTORY_API_BASE_URL + '/' + clientId);
    }

}

export default new PastShipsAppointmentAPI();