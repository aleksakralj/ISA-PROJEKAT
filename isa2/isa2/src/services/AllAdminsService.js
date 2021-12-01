import axios from 'axios';

const ALLADMINS_API_BASE_URL = "http://localhost:8080/api/v1/admins";

class AllAdminsService{

getAdmins(){
    return axios.get(ALLADMINS_API_BASE_URL);
}

}
export default new AllAdminsService();
