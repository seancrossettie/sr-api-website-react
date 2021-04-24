import axios from 'axios';
import weatherApiKey from './apiKeys';

const key = weatherApiKey;

const getWeather = () => new Promise((resolve, reject) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=${key}`)
    .then((response) => {
      if (response.data) {
        resolve(response.data);
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

export default getWeather;
