import axios from 'axios';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather/'
const API_KEY = "5aacfde4f7d201a4132c4fca06ac2702";

async function getCurrentWeather (city, country) {
    
  const response = await axios.get(`${API_URL}?q=${city},${country}&units=metric&APPID=${API_KEY}`)
  return response.data;
};

export {
  getCurrentWeather,
}
