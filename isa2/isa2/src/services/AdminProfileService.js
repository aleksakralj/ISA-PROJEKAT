import axios from 'axios';

const ADMINPROFILE_API_BASE_URL = "http://localhost:8080/api/v1/admins";

class AdminProfileService{

getAdmins(){
    return axios.get( ADMINPROFILE_API_BASE_URL);
}
createAdmin(admin){
    return axios.post(ADMINPROFILE_API_BASE_URL, admin);
}

}
export default new AdminProfileService();
