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

    static async create(fnCreate, data) {
        if(!data) return;
        const token = localStorage.getItem('token');

        axios.post(`${URL}/tasks/createTask`, data, {headers: {Authorization: `Bearer ${token}`}})
            .then(response => fnCreate(prev => [...prev, response.data]))
            .catch(error => console.error('Error creating data:', error));
    }

    static async delete(fn, id){
        if(!id) return;
        const token = localStorage.getItem('token');

        axios.delete(`${URL}/tasks/deleteTask/${id}`, {headers: {Authorization: `Bearer ${token}`}})
            .then(() => fn(prev => prev.filter(task => task.id !== id)))
            .catch(error => console.error('Error deleting data:', error));
    }
}
