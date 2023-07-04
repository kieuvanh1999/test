import axios from "axios";

const api = axios.create({
    baseURL: 'https://dev-api.dsc.com.vn/api/'
});

export default api