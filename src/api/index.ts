import Axios from 'axios';
import { configure } from 'axios-hooks';
import LRU from 'lru-cache';
import { getEnvVars } from '../environment';

const { apiUrl } = getEnvVars();
const axios: any = Axios.create({
  baseURL: apiUrl,
  withCredentials: false,
});
const cache = new LRU({ max: 10 });

configure({ axios, cache });
