import axios from "axios";

const SHIP_FREE_APPOINTMENTS_API_BASE_URL = "http://localhost:8080/api/v1/shipfreeappointments";


class ShipFreeAppointmenrsService {

    getShipFreeAppointments(){
        return axios.get(SHIP_FREE_APPOINTMENTS_API_BASE_URL);
    }

    createShipFreeAppointment(shipAppointment){
        return axios.post(SHIP_FREE_APPOINTMENTS_API_BASE_URL,shipAppointment);
    }

    findShipFreeAppointmentsByShipId(shipId){
        return axios.get(SHIP_FREE_APPOINTMENTS_API_BASE_URL + '/ship/' + shipId);
    }

    findShipFreeAppointmentsById(shipAppointmentId){
        return axios.get(SHIP_FREE_APPOINTMENTS_API_BASE_URL + '/' +shipAppointmentId);
    }

    deleteShipFreeAppointment(shipAppointmentId){
        return axios.delete(SHIP_FREE_APPOINTMENTS_API_BASE_URL+'/'+shipAppointmentId);
    }
    findAllFreeShipsAppointmentsForRequiredTime(startingTime, endingTime) {
        return axios.get(SHIP_FREE_APPOINTMENTS_API_BASE_URL+ '/' + startingTime + '/' + endingTime )
    }

}
export default new ShipFreeAppointmenrsService();
