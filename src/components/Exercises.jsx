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
            <h2 className="subtitle-routine">{(exercise.muscle).toUpperCase()}</h2>
            </div>
            <div className="info-training-cards">
            <p className="name-training-subtitle">Name:</p>
            <p className="api-name">{exercise ? exercise.name : 'Loading...'}</p>
            <p className="equipment-subtitle">Equipment:</p>
            <p className="api-equipment">{exercise ? (exercise.equipment)[0].toUpperCase() + (exercise.equipment).substring(1) : 'Loading...'}</p>
            <p className="difficulty-subtitle">Difficulty:</p>
            <p className="api-difficulty">{exercise ? (exercise.difficulty)[0].toUpperCase() + (exercise.difficulty).substring(1) : 'Loading...'}</p>
            <p className="instructions-subtitle">Instructions:</p>
            <p className="api-instructions">{exercise ? exercise.instructions : 'Loading...'}</p>
            </div>
        </div>
    )
}

export default Exercises