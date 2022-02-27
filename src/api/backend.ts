import axios from 'axios';
import config from '../config';
import { store } from '../store';

const backendUrl = config.secured ? `https://${config.backend}` : `http://${config.backend}`

const instance = axios.create({
  baseURL: `${backendUrl}/api`,
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use(config => {
  const auth = store.getState().auth;
  if (auth.logged) {
    config.headers!['Authorization'] = `token ${auth.token}`;
  }
  return config;
});

export default instance;
