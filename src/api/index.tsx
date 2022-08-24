import axios from 'axios';
import { getEnvVars } from '../environment';

const { apiUrl } = getEnvVars();

const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
});

export default axiosInstance;
