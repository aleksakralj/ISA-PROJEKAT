import axios from 'axios';

const LOGIN_API_BASE_URL_CO = "http://localhost:8080/api/v1/cottageowners";
const LOGIN_API_BASE_URL_USERS = "http://localhost:8080/api/v1/users";

class LoginService{


getUserByEmailAndPassword(email,password){
    return axios.get(LOGIN_API_BASE_URL_USERS+'/'+email+'/'+password);
}
    
getAdmins(){
    return axios.get( LOGIN_API_BASE_URL_CO);
}



getAdminById(Id){
    return axios.get(LOGIN_API_BASE_URL_CO + '/' + Id);
}

getCottageOwner(){
return axios.get( LOGIN_API_BASE_URL_CO);
}




}
export default new LoginService();


