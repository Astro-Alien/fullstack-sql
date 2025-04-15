import axios from 'axios';

const URL = import.meta.env.VITE_APP_API_URL

export class ApiRequester {
    static async get(fn) {
        axios.get(`${URL}`)
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
