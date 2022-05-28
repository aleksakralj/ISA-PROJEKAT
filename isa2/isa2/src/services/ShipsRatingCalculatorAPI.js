import axios from "axios";

const SHIP_RATING_CALCULATOR_API_BASE_URL = "http://localhost:8080/api/v1/ship-rating";

class ShipsRatingCalculatorAPI {

    getShipRatings() {
        return axios.get(SHIP_RATING_CALCULATOR_API_BASE_URL);
    }

    createShipRating(shipRating) {
        return axios.post(SHIP_RATING_CALCULATOR_API_BASE_URL , shipRating);
    }

    getById(shipRatingId) {
        return axios.get(SHIP_RATING_CALCULATOR_API_BASE_URL + shipRatingId);
    }

    updateShipRating(userRateShip) {
        return axios.put(SHIP_RATING_CALCULATOR_API_BASE_URL, userRateShip);
    }

    deleteShipRating(shipRatingId) {
        return axios.delete(SHIP_RATING_CALCULATOR_API_BASE_URL + shipRatingId);
    }

} export default new ShipsRatingCalculatorAPI();