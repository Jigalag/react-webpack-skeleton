import axios from 'axios';
import { apiRoute } from './constants';

const headers = {
  'Content-Type': 'application/json',
};
const secureApi = axios.create({ baseURL: apiRoute, headers });

secureApi.interceptors.response.use(
  (res) => res.data,
  () => {
    // handle error
  },
);

export { secureApi };
