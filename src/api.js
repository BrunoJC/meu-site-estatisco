import axios from 'axios';
import Pesquisa from './pesquisa'

const api = axios.create({
    baseURL: 'https://api.tvmaze.com/search/shows?q=:'
});

export default api;