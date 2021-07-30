import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './WeatherAPI.css';

const API_KEY = '47dbedf666986267ef0c1df323ba76b4';

export function getIconUrl(code) {
  return `http://openweathermap.org/img/wn/${code}.png`;
}

async function getWeatherForLocation(location) {
  const url =  `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
  return (await axios.get(url)).data;
}

function WeatherData({weatherData}) {
  if (weatherData.length===0) return (<></>);
  return (
    <Card>
      <Card.Content>
          <Card.Header className="header">City Name: {weatherData.name}</Card.Header>
          <p>Temprature: {weatherData.main.temp}</p>
          <p>Sunrise: {weatherData.sys.sunrise}</p>
          <p>Sunset: {weatherData.sys.sunset}</p>
          <p>Description: {weatherData.weather[0].description}</p>
      </Card.Content>
    </Card>
  );
}

function WeatherAPI() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
 
  useEffect(() => {
    (async ()=> {

      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    })();

  }, [lat,long])


  return (
    <>
     <h1>Weather App</h1>
      <WeatherData weatherData={data}/>
    </>
  );
}

export default WeatherAPI;