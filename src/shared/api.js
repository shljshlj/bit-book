import axios from 'axios';
import { BASE_API_ENDPOINT } from './constants';

export default axios.create({
    baseURL: BASE_API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.REACT_APP_BOOK_API_KEY
    }
});

const baseUrl = BASE_API_ENDPOINT;

const headers = {
    'Content-Type': 'application/json',
    'x-api-key': process.env.REACT_APP_BOOK_API_KEY
}

class ApiService {
    async get(endpoint, params = null) {

        const requestUrl = baseUrl + endpoint;
        const options = {
            method: 'GET',
            headers: new Headers({...headers}),
            params
        };


        const response = await fetch(requestUrl, options);
        return await response.json();
    
    }

    async post(endpoint, Authorization = null) {

        const requestUrl = baseUrl + endpoint;
        const options = {
            method: 'POST',
            headers: new Headers({
                ...headers,
                Authorization
            })
        };

        const response = await fetch(requestUrl, options);
        return await response.json();
    }
}

export const apiService = new ApiService(); 