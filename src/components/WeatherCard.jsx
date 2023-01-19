import React from 'react';
import "../styles/weatherCard.scss";

const WeatherCard = () => {
    return (
        <div className="weather-card day-first">
            <h2 className="day">Monday</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJ4Bbh8G7xG3ReQBj1NSixz7c43HbmzcgkA&usqp=CAU" alt="day-first" />
            <div className="temperatures">
                <p className="max-temp">max° <span className="min-temp">min°</span></p>
            </div>
        </div>
    )
}

export default WeatherCard