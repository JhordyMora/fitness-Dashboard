import React, { useState, useEffect} from 'react';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard';
import WeatherCardForecast from '../components/WeatherCardForecast';
import "../styles/weather.scss";

const API = "https://api.openweathermap.org/data/2.5/forecast?lat=52.52&lon=13.41&units=metric&appid=6170a5f2b56cea956589750a64079780";

const Weather = () => {
    const [weatherForecast, setWeatherForecast] = useState([]);

    let calendarDay;

    let infoComingDays = []


    useEffect(()=>{
        async function fetchData() {
            const response = await axios(API);
            calendarDay = (response.data.list[0].dt_txt).substring(0, 10);
            for(let i in response.data.list){
                if((response.data.list[i].dt_txt).substring(0, 10) != calendarDay){
                    infoComingDays.push(response.data.list[i]);
                    calendarDay = (response.data.list[i].dt_txt).substring(0, 10);
                }
            }
            console.log(infoComingDays);
            setWeatherForecast(infoComingDays);

        }
        fetchData();
    },[])
    
    return (
        <div className="weather-container">
            <h2 className="wheather-title title-basic">The Weather the following days</h2>
            <div className="week-weather">
                <WeatherCard/>
                <WeatherCardForecast weatherForecast = {weatherForecast}/>
                {weatherForecast.map((weatherForecast, index)=> <WeatherCardForecast key={index} weatherForecast={weatherForecast}/>)}
            </div>
                {/* <WeatherCardForecast/>
                <WeatherCardForecast/>
                <WeatherCardForecast/>
                <WeatherCardForecast/>
                <WeatherCardForecast/>
            </div> */}
        </div>
    )
}

export default Weather