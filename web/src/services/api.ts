import axios  from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:777',
})

export default api;