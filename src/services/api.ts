import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = 'https://pokeapi.co/api/v2';

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

export { api };
