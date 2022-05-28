import axios from "axios";

const ADVENTURE_RATING_API_BASE_URL = "http://localhost:8080/api/v1/user-rate-adventure";
const COTTAGE_RATING_API_BASE_URL = "http://localhost:8080/api/v1/user-rate-cottage";
const SHIP_RATING_API_BASE_URL = "http://localhost:8080/api/v1/user-rate-ship";

class EntityRatingAPI {

    getAdventureRatings(){
        return axios.get(ADVENTURE_RATING_API_BASE_URL);
    }
    createAdventureRatings(adventureRating){
        return axios.post(ADVENTURE_RATING_API_BASE_URL, adventureRating);
    }
    getAdventureRatingById(adventureRatingId){
        return axios.get(ADVENTURE_RATING_API_BASE_URL + '/' + adventureRatingId);
    }
    
    
    getCottageRatings(){
        return axios.get(COTTAGE_RATING_API_BASE_URL);
    }
    createCottageRatings(cottageRating){
        return axios.post(COTTAGE_RATING_API_BASE_URL, cottageRating);
    }
    getCottageRatingById(cottageRatingId){
        return axios.get(COTTAGE_RATING_API_BASE_URL + '/' + cottageRatingId);
    }
    
    
    getShipRatings(){
        return axios.get(SHIP_RATING_API_BASE_URL);
    }
    createShipRatings(shipRating){
        return axios.post(SHIP_RATING_API_BASE_URL, shipRating);
    }
    getShipRatingById(shipRatingId){
        return axios.get(SHIP_RATING_API_BASE_URL + '/' + shipRatingId);
    }
    


} export default new EntityRatingAPI();