import axios from 'axios';

const ADVENTURE_API_BASE_URL = "http://localhost:8080/api/v1/adventures";

class AdventureService{

getAdventures(){
    return axios.get(ADVENTURE_API_BASE_URL);
}
createAdventure(adventure){
    return axios.post(ADVENTURE_API_BASE_URL, adventure);
}
getAdventureById(adventureId){
    return axios.get(ADVENTURE_API_BASE_URL + '/' + adventureId);
}
updateAdventure(adventure,adventureId){
    return axios.put(ADVENTURE_API_BASE_URL + '/' + adventureId,adventure);
}
deleteAdventure(adventureId){
    return axios.delete(ADVENTURE_API_BASE_URL+ '/' + adventureId);
}
}
export default new AdventureService();
