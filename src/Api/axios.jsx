
import axios from "axios";
const axiosInstance = axios.create({
     // baseURL: "http://localhost:4000"
     baseURL:"https://amazon-api-deploy-n58m.onrender.com"

})
export { axiosInstance }
