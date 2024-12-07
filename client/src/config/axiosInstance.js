import axios from 'axios';
import {baseUrl} from '../services/requestManager';


const instance = axios.create({
    "baseURL": baseUrl
})


instance.interceptors.request.use(
    config => {
        const accessToken = localStorage.getItem('accessToken'); // Có thể lấy từ localStorage hoặc nơi lưu trữ
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default instance;

