import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // Ensure the backend server URL is correct
});

export const googleAuth = (code) => api.get(`auth/google?code=${code}`);
