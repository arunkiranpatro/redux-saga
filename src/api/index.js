import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export function getAccountInfo(params) {
    return client.post('/users', params);
}
export function getTransactions(params) {
    return client.get('/transactions/getAll', params);
}