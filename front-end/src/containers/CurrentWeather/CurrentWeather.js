import React, {useEffect, useState} from 'react';
import moment from 'moment';
import { getCurrentWeather, getIcon } from '../../api/openweather';

import './CurrentWeather.css';

function CurrentWeather() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  
  useEffect(() => {

    (async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      const data = await getCurrentWeather(lat, long);
      setWeatherData(data);
      const icon = getIcon(data.icon);

    })();

  }, [lat, long]);

  if (typeof weatherData.main!=='undefined') {
    return (
      <>
      <div>City Name: {weatherData.name}</div>
      <p>Temprature: {weatherData.main.temp} &deg;C</p>
      <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
      <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
      <p>Description: {weatherData.weather[0].main}</p>
      <p>Humidity: {weatherData.main.humidity} %</p>
      <p>Day: {moment().format('dddd')}</p>
      <p>Date: {moment().format('LL')}</p>
      </>
      )
  }
  else {
    return (<></>)
  }

}

export default CurrentWeather;