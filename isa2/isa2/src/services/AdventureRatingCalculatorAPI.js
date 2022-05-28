import axios from "axios";

const ADVENTURE_RATING_CALCULATOR_API_BASE_URL = "http://localhost:8080/api/v1/adventure-rating";

class AdventureRatingCalculatorAPI {

    getAdventureRatings() {
        return axios.get(ADVENTURE_RATING_CALCULATOR_API_BASE_URL);
    }

    createAdventureRating(adventureRating) {
        return axios.post(ADVENTURE_RATING_CALCULATOR_API_BASE_URL , adventureRating);
    }

    getById(adventureRatingId) {
        return axios.get(ADVENTURE_RATING_CALCULATOR_API_BASE_URL + adventureRatingId);
    }

    updateAdventureRating(userRateAdventure) {
        return axios.put(ADVENTURE_RATING_CALCULATOR_API_BASE_URL, userRateAdventure);
    }

    deleteAdventureRating(adventureRaingId) {
        return axios.delete(ADVENTURE_RATING_CALCULATOR_API_BASE_URL + adventureRaingId);
    }

} export default new AdventureRatingCalculatorAPI();