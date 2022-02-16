import axios from 'axios';
import config from './config';

const instance = axios.create({
        baseURL: `${config.backendUrl}/api`,
    });

axios.defaults.headers.post['Content-Type'] = 'application/json';

export default instance;