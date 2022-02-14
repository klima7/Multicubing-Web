import axios from 'axios';

const instance = axios.create({
        baseURL: 'https://multicubing-backend.herokuapp.com/api',
    });

axios.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;