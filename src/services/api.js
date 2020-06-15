import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.postmon.com.br/v1/cep/'
});

export default api;