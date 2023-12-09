import axios from "axios";

const USER_API_BASE_URL = "http://localhost:8081/api/v1/users";


class UserService {

 saveUser(formData){
    return axios.post(USER_API_BASE_URL,formData);

 }
 
}

export default new UserService();