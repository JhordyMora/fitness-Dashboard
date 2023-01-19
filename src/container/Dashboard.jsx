import React from 'react';
import "../styles/dashboard.scss";

const Dashboard = () => {
    return (
        <main className="dashboard-container">
        <h1 className="main-title title-basic">Fitness Dashboard</h1>
        <div className="today-routine-container">
            <h2 className="routine-title title-basic">Today's Routine</h2>
            <div className="today-routine">
            <div className="training-card arms">
                <div className="title-training-cards">
                <img src="../src/assets/icons/biceps.png" alt="arms" />
                <h2 className="subtitle-routine">Arms</h2>
                </div>
                <div className="info-training-cards">
                <p className="name-training-subtitle">Name:</p>
                <p className="api-name">name from api</p>
                <p className="equipment-subtitle">Equipment:</p>
                <p className="api-equipment">equipment from api</p>
                <p className="difficulty-subtitle">Difficulty:</p>
                <p className="api-difficulty">difficulty from api</p>
                <p className="instructions-subtitle">Instructions:</p>
                <p className="api-instructions">instructions from api, instructions from api, instructions from api, instructions from api, instructions from api, instructions from api, instructions from api, instructions from api, instructions from api, instructions from api, instructions from api, instructions from api, instructions from api, instructions from api, instructions from api, instructions from api, </p>
                </div>
            </div>
            <div className="training-card abs">
                <div className="title-training-cards">
                <img src="../src/assets/icons/abs.png" alt="abs" />
                <h2 className="subtitle-routine">Abs</h2>
                </div>
                <div className="info-training-cards">
                <p className="name-training-subtitle">Name:</p>
                <p className="api-name">name from api</p>
                <p className="equipment-subtitle">Equipment:</p>
                <p className="api-equipment">equipment from api</p>
                <p className="difficulty-subtitle">Difficulty:</p>
                <p className="api-difficulty">difficulty from api</p>
                <p className="instructions-subtitle">Instructions:</p>
                <p className="api-instructions">instructions from api</p>
                </div>
            </div>
            <div className="training-card legs">
                <div className="title-training-cards">
                <img src="../src/assets/icons/legs.png" alt="legs" />
                <h2 className="subtitle-routine">Legs</h2>
                </div>
                <div className="info-training-cards">
                <p className="name-training-subtitle">Name:</p>
                <p className="api-name">name from api</p>
                <p className="equipment-subtitle">Equipment:</p>
                <p className="api-equipment">equipment from api</p>
                <p className="difficulty-subtitle">Difficulty:</p>
                <p className="api-difficulty">difficulty from api</p>
                <p className="instructions-subtitle">Instructions:</p>
                <p className="api-instructions">instructions from api</p>
                </div>
            </div>
            </div>
        </div>
        <div className="weather-container">
            <h2 className="wheather-title title-basic">The Weather the following days</h2>
            <div className="week-weather">
            <div className="weather-card day-first">
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
            </div>
            </div>
        </div>
        </main>

    )
}

export default Dashboard