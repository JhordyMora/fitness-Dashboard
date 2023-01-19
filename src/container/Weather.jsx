import React from 'react';
import WeatherCard from '../components/WeatherCard';
import "../styles/weather.scss";

const Weather = () => {
    return (
        <div className="weather-container">
            <h2 className="wheather-title title-basic">The Weather the following days</h2>
            <div className="week-weather">
                <WeatherCard/>
                <WeatherCard/>
                <WeatherCard/>
                <WeatherCard/>
                <WeatherCard/>
                <WeatherCard/>
                <WeatherCard/>
            {/* <div className="weather-card day-first">
                <h2 className="day">Monday</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJ4Bbh8G7xG3ReQBj1NSixz7c43HbmzcgkA&usqp=CAU" alt="day-first" />
                <div className="temperatures">
                <p className="max-temp">max° <span className="min-temp">min°</span></p>
                </div>
            </div>
            <div className="weather-card day-second">
                <h2 className="day">Tuesday</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJ4Bbh8G7xG3ReQBj1NSixz7c43HbmzcgkA&usqp=CAU" alt="day-second" />
                <div className="temperatures">
                <p className="max-temp">max° <span className="min-temp">min°</span></p>
                </div>
            </div>
            <div className="weather-card day-third">
                <h2 className="day">Wednesday</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJ4Bbh8G7xG3ReQBj1NSixz7c43HbmzcgkA&usqp=CAU" alt="day-third" />
                <div className="temperatures">
                <p className="max-temp">max° <span className="min-temp">min°</span></p>
                </div>
            </div>
            <div className="weather-card day-fourth">
                <h2 className="day">Thursday</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJ4Bbh8G7xG3ReQBj1NSixz7c43HbmzcgkA&usqp=CAU" alt="day-fourth" />
                <div className="temperatures">
                <p className="max-temp">max°<span className="min-temp">min°</span></p>
                </div>
            </div>
            <div className="weather-card day-fifth">
                <h2 className="day">Friday</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJ4Bbh8G7xG3ReQBj1NSixz7c43HbmzcgkA&usqp=CAU" alt="day-fifth" />
                <div className="temperatures">
                <p className="max-temp">max° <span className="min-temp">min°</span></p>
                </div>
            </div>
            <div className="weather-card day-sixth">
                <h2 className="day">Saturday</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJ4Bbh8G7xG3ReQBj1NSixz7c43HbmzcgkA&usqp=CAU" alt="day-sixth" />
                <div className="temperatures">
                <p className="max-temp">max° <span className="min-temp">min°</span></p>
                </div>
            </div>
            <div className="weather-card day-seventh">
                <h2 className="day">Sunday</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJ4Bbh8G7xG3ReQBj1NSixz7c43HbmzcgkA&usqp=CAU" alt="day-seventh" />
                <div className="temperatures">
                <p className="max-temp">max° <span className="min-temp">min°</span></p>
                </div>
            </div> */}
            </div>
        </div>
    )
}

export default Weather