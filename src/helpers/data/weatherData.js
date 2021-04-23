import axios from 'axios';
import weatherApiKey from '../../apiKey';

const key = weatherApiKey;

const getWeather = () => new Promise((resolve, reject) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=${key}`)
    .then((response) => {
      if (response.data) {
        console.warn(response.data);
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

export default getWeather;
