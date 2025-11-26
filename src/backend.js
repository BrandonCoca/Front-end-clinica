import axios from 'axios';
import { API_BASE_URL } from './config.js';
import { TokenService } from './auth/services/TokenService.js';

const backend = axios.create({
    baseURL: API_BASE_URL
});

backend.interceptors.request.use((config) => {
    const token = TokenService.get();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export default backend;