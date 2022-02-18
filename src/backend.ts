import axios from 'axios';
import config from './config';
import { store } from './store';

const instance = axios.create({
        baseURL: `${config.backendUrl}/api`,
    });

instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use(config => {
    const auth = store.getState().authReducer;
    config.headers!['Authorization'] = `token ${auth.token}`;
    return config;
});

export default instance;
