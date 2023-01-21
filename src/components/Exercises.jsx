import React from 'react';
import "../styles/trainningCards.scss";

const muscleToImage = {
    "biceps": "../assets/icons/biceps.png",
    "triceps": "../assets/icons/biceps.png",
    "forearms": "../assets/icons/biceps.png",
    "chest": "../assets/icons/abs.png",
    "abdominals": "../assets/icons/abs.png",
    "abductors": "../assets/icons/legs.png",
    "adductors": "../assets/icons/legs.png",
    "calves": "../assets/icons/legs.png",
    "quadriceps": "../assets/icons/legs.png",
    "hamstrings": "../assets/icons/legs.png",
    "glutes": "../assets/icons/legs.png",
}

const Exercises = ({exercise, index}) => {
    return (
        <div className="training-card abs" key={index}>
            <div className="title-training-cards">
            <img src={muscleToImage[exercise.muscle]} alt={exercise.muscle} />
            <h2 className="subtitle-routine">{exercise.muscle}</h2>
            </div>
            <div className="info-training-cards">
            <p className="name-training-subtitle">Name:</p>
            <p className="api-name">{exercise.name}</p>
            <p className="equipment-subtitle">Equipment:</p>
            <p className="api-equipment">{exercise.equipment}</p>
            <p className="difficulty-subtitle">Difficulty:</p>
            <p className="api-difficulty">{exercise.difficulty}</p>
            <p className="instructions-subtitle">Instructions:</p>
            <p className="api-instructions">{exercise.instructions}</p>
            </div>
        </div>
    )
}

export default Exercises