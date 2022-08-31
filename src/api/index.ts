import axios from 'axios';
import { getEnvVars } from '../environment';

const { apiUrl } = getEnvVars();
const API = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
});

export default API;
