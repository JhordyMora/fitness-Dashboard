import React from 'react';
import useGetWeatherToday from '../hooks/useGetWeatherToday';
import "../styles/weatherCard.scss";

require('dotenv').config();
const API = `https://api.openweathermap.org/data/2.5/weather?lat=52.52&lon=13.41&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

const WeatherCard = () => {

    const WeatherToday = useGetWeatherToday(API);//""//

    return (
        <div className="weather-card day-first">
            <h2 className="day">Today</h2>
            <img src={`http://openweathermap.org/img/wn/${WeatherToday.weather ? WeatherToday.weather[0].icon : '10d'}@2x.png`} alt="day-first" />
            <div className="temperatures">
                <p className="max-temp">{WeatherToday.main ? WeatherToday.main.temp_max : 'Loading...'}°<span className="min-temp">{WeatherToday.main ? WeatherToday.main.temp_min : 'Loading...'}°</span></p>
            </div>
        </div>
    )
}

export default WeatherCard