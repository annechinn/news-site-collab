import React, {useEffect, useState} from 'react';
import { getCurrentWeather } from '../../api/openweather';
import './CurrentWeather.css';

function CurrentWeather() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [feels_like,setFeelsLike] = useState('');
  const [mainTemp,setMainTemp] = useState('');
  const [description,setDescription] = useState('');
  const [main,setMain] = useState('');
  const [iconID,setIconID] = useState('');

  useEffect(()=> {

      (async () => {
        const data = await getCurrentWeather('seattle', 'us');
        setFeelsLike(data.main.feels_like);
        setMainTemp(data.main.temp);
        setDescription(data.weather[0].description);
        setMain(data.weather[0].main);
        setIconID(data.weather[0].icon);
      })(); 
  })

  return (
  <>
    <h1>Main Temperature : {mainTemp} Degrees Celsius</h1>
    <h1>Feels like: {feels_like} Degrees Celsius</h1>
    <h1>Weather Parameter: {main}</h1>
    <h1>Description : {description}</h1>
    <img src={`http://openweathermap.org/img/wn/${iconID}@2x.png`} alt="weather" />
</>
  )
}

export default CurrentWeather;