import axios from "axios";

const token = localStorage.getItem('token');

const http = axios.create({
    'baseURL': 'http://127.0.0.1:8000/api/login',
      withCredentials: true,
      'Authorization': `Bearer ${token}`,
});

 export default http;