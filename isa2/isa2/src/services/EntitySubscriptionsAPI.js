import axios from "axios";

const ADVENTURE_SUBSCRIPTIONS_API_BASE_URL = 'http://localhost:8080/api/v1/adventuresubscriptions'
const SHIPS_SUBSCRIPTIONS_API_BASE_URL = 'http://localhost:8080/api/v1/shipsubscriptions'
const COTTAGE_SUBSCRIPTIONS_API_BASE_URL = 'http://localhost:8080/api/v1/cottagesubscriptions'

class EntitySubscriptionsAPI {

    getAllAdventuresSubscriptionsForSpecificUser(userId) {
        return axios.get(ADVENTURE_SUBSCRIPTIONS_API_BASE_URL + userId);
    }
    createAdventureSubscription(subscription){
        return axios.post(ADVENTURE_SUBSCRIPTIONS_API_BASE_URL, subscription);
    }
    deleteAdventureSubscription(subId) {
        return axios.delete(ADVENTURE_SUBSCRIPTIONS_API_BASE_URL + '/' + subId);
    }
    getAdventureSubscriptionByIds(userId, adventureId){
        return axios.get(ADVENTURE_SUBSCRIPTIONS_API_BASE_URL + '/'+ userId  + '/' + adventureId);
    }
    deleteAdventureSubscriptionByUserIdAndAdventureId(userId, adventureId){
        return axios.delete(ADVENTURE_SUBSCRIPTIONS_API_BASE_URL + '/' + userId + '/' + adventureId); 
    }


    getAllCottagesSubscriptionsForSpecificUser(userId){
        return axios.get(COTTAGE_SUBSCRIPTIONS_API_BASE_URL + userId);
    }
    createCottageSubscription(subscription){
        return axios.post(COTTAGE_SUBSCRIPTIONS_API_BASE_URL, subscription);
    }
    deleteCottageSubscription(subId) {
        return axios.delete(COTTAGE_SUBSCRIPTIONS_API_BASE_URL, subId)
    }
    deleteCottageSubscriptionByUserIdAndCottageId(userId, cottageId){
        return axios.delete(COTTAGE_SUBSCRIPTIONS_API_BASE_URL + '/' + userId + '/' + cottageId); 
    }    
    getCottagesSubscriptionByIds(userId, cottageId){
        return axios.get(COTTAGE_SUBSCRIPTIONS_API_BASE_URL + '/'+ userId  + '/' + cottageId);
    }


    getAllShipsSubscriptionsForSpecificUser(userId){
        return axios.get(SHIPS_SUBSCRIPTIONS_API_BASE_URL + userId);
    }
    createShipSubscription(subscription){
        return axios.post(SHIPS_SUBSCRIPTIONS_API_BASE_URL, subscription)
    }
    deleteShipSubscription(subId){
        return axios.delete(SHIPS_SUBSCRIPTIONS_API_BASE_URL + subId);
    }
    deleteShipSubscriptionByUserIdAndShipId(userId, shipId){
        return axios.delete(SHIPS_SUBSCRIPTIONS_API_BASE_URL + '/' + userId + '/' + shipId); 
    }
    getShipssSubscriptionByIds(userId, shipId){
        return axios.get(SHIPS_SUBSCRIPTIONS_API_BASE_URL + '/'+ userId  + '/' + shipId);
    }
}
export default new EntitySubscriptionsAPI()