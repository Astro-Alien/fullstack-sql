import axios from 'axios';

const URL = import.meta.env.VITE_APP_API_URL

export class ApiRequester {

    static async login({username, password}) {
        return axios.post(`${URL}/users/login`, {username, password})
            .then(response => localStorage.setItem('token', response.data.token))
            .catch(error => console.error('Error logging in:', error));
    }

    static async get(fn) {
        const token = localStorage.getItem('token');
        axios.get(`${URL}/tasks/fetchTasks`, {headers: {Authorization: `Bearer ${token}`}})
            .then(response => fn(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }

    static async create(fnCreate, fnSet, data) {
        if(!data) return;

        axios.post(`${URL}`, data)
            .then(response => fnCreate(prev => [...prev, response.data]))
            .catch(error => console.error('Error creating data:', error));
            fnSet({title: '', description: ''});
    }
}
