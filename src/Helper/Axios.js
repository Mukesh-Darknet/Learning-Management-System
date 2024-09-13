import axios from "axios";

const BASE_URl = "http://localhost:5012/api/m1";
const axiosInstance =  axios.create();

axiosInstance.defaults.baseURL = BASE_URl;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;