import React from 'react';
import "../styles/weatherCard.scss";

const WeatherCardForecast = ({weatherForecast, index}) => {

    return (
        <div className="weather-card day-first" key={index}>
            <h2 className="day">Coming Days</h2>
            <img src={`http://openweathermap.org/img/wn/${weatherForecast.weather ? weatherForecast.weather[0].icon : '10d'}@2x.png`} alt="day-first" />
            <div className="temperatures">
                <p className="max-temp">{weatherForecast.main ? weatherForecast.main.temp_max : 'Loading...'}°<span className="min-temp">{weatherForecast.main ? weatherForecast.main.temp_min : 'Loading...'}°</span></p>
            </div>
        </div>
    )
}

export default WeatherCardForecast