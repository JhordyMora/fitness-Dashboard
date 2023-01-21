import React, { useEffect, useState} from 'react';
import "../styles/weatherCard.scss";
import axios from "axios";

// const API = "https://api.openweathermap.org/data/2.5/weather?lat=52.52&lon=13.41&units=metric&appid=6170a5f2b56cea956589750a64079780";

const WeatherCard = () => {
    const [weather, setWeather] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const response = await axios(API);
            setWeather(response.data);
            console.log(response.data);
        }
        fetchData();
    },[])

    return (
        <div className="weather-card day-first">
            <h2 className="day">Monday</h2>
            <img src={`http://openweathermap.org/img/wn/${weather.weather ? weather.weather[0].icon : '10d'}@2x.png`} alt="day-first" />
            <div className="temperatures">
                <p className="max-temp">{weather.main ? weather.main.temp_max : 'Loading...'}°<span className="min-temp">{weather.main ? weather.main.temp_min : 'Loading...'}°</span></p>
            </div>
        </div>
    )
}

export default WeatherCard