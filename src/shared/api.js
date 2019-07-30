import axios from 'axios';
import { BASE_API_ENDPOINT } from './constants';

export default axios.create({
    baseURL: BASE_API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.REACT_APP_BOOK_API_KEY
    }
});