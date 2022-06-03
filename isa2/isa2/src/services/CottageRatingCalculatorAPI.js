import axios from "axios";

const COTTAGE_RATING_CALCULATOR_API_BASE_URL = "http://localhost:8080/api/v1/cottage-rating";

class CottageRatingCalculatorAPI {

    getCottageRatings() {
        return axios.get(COTTAGE_RATING_CALCULATOR_API_BASE_URL);
    }

    createCottageRating(cottageRating) {
        return axios.post(COTTAGE_RATING_CALCULATOR_API_BASE_URL , cottageRating);
    }

    getByCottageId(cottageRatingId) {
        return axios.get(COTTAGE_RATING_CALCULATOR_API_BASE_URL + '/' +  cottageRatingId);
    }

    updateCottageRating(userRateCottage) {
        return axios.put(COTTAGE_RATING_CALCULATOR_API_BASE_URL, userRateCottage);
    }

    deleteCottageRating(cottageRatingId) {
        return axios.delete(COTTAGE_RATING_CALCULATOR_API_BASE_URL + cottageRatingId);
    }

} export default new CottageRatingCalculatorAPI();