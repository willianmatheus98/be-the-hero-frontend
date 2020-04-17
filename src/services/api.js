import axios from 'axios';

const api = axios.create({
    baseURL: 'https://be-the-hero-123.herokuapp.com',
});

export default api;