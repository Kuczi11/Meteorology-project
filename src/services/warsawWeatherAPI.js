import axios from 'axios';
import { WARSAW_URL } from './apiConfig';

function* getWeather() {
  const response = yield axios.get(WARSAW_URL);
  if (response.status === 200) {
    return response.data;
  }
  throw new Error();
}

export default getWeather;
