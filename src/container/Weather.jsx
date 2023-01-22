import React from 'react';
import WeatherCard from '../components/WeatherCard';
import WeatherCardForecast from '../components/WeatherCardForecast';
import useGetWeatherComming from '../hooks/useGetWeatherComming';
import "../styles/weather.scss";

const API = "https://api.openweathermap.org/data/2.5/forecast?lat=52.52&lon=13.41&units=metric&appid=6170a5f2b56cea956589750a64079780";

const Weather = () => {

    const weatherForecast = useGetWeatherComming(API);//[]//

    return (
        <div className="weather-container">
            <h2 className="wheather-title title-basic">Weather Forecast</h2>
            <div className="week-weather">
                <WeatherCard/>
                {weatherForecast.map((weatherForecast, index)=> <WeatherCardForecast key={index} weatherForecast={weatherForecast}/>)}
            </div>
        </div>
    )
}

export default Weather