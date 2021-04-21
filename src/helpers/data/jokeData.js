import axios from 'axios';

const getJokes = () => new Promise((resolve, reject) => {
  axios.get('https://official-joke-api.appspot.com/jokes/random')
    .then((response) => resolve(Object(response.data)))
    .catch((error) => reject(error));
});

export default getJokes;
