import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

async function getToken() {
  const token = await AsyncStorage.getItem('iguacu:token');
  return token;
}
const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  // headers: {
  //   'Accept-Language': 'pt',
  // },
});

api.interceptors.request.use(async (cfg) => {
  // cfg.headers['Accept-Language'] = 'pt';
  const token = await getToken();
  if (token) {
    cfg.headers.Authorization = `Bearer ${token}`;
  }
  return cfg;
});
// TODO
// correção de bug no axios https://github.com/axios/axios/issues/1723
api.interceptors.response.use(
  (response) => {
    let newResponse = response.data;
    if (typeof newResponse === 'string') {
      try {
        JSON.parse(newResponse);
      } catch (err) {
        console.log(err);
        try {
          newResponse = JSON.parse(`${newResponse}}`);
        } catch (error) {
          console.log(error);
        }
      }
    }

    return { ...response, data: newResponse };
  },
  (error) => {
    if (error.config && error.response && error.response.status === 401) {
      /* TODO: REFRESH TOKEN */
    }
    return Promise.reject(error);
  }
);

export default api;
