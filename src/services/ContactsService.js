import axios from "axios";


const contact_api_base_url=  "http://localhost:8081/api/v1/contacts";


class ContactService {


 saveuser(formData){
   return axios.post(contact_api_base_url,formData);
 
}


}

export default new ContactService();