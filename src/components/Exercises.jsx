import React from 'react';
import "../styles/trainningCards.scss";

const Exercises = ({exercise, index}) => {
    return (
        <div className="training-card abs">
            <div className="title-training-cards" key={index}>
                <img src={exercise.icon} alt={exercise.muscle} />
                <h2 className="subtitle-routine">{(exercise.muscle).toUpperCase()}</h2>
            </div>
            <div className="info-training-cards">
                <p className="name-training-subtitle">Name:</p>
                <p className="api-name">{exercise ? exercise.name : 'Loading...'}</p>
                <p className="equipment-subtitle">Equipment:</p>
                <p className="api-equipment">{exercise.equipment ? ((exercise.equipment)[0].toUpperCase() + (exercise.equipment).substring(1)) : 'Loading...'}</p>
                <p className="difficulty-subtitle">Difficulty:</p>
                <p className="api-difficulty">{exercise.difficulty ? ((exercise.difficulty)[0].toUpperCase() + (exercise.difficulty).substring(1)) : 'Loading...'}</p>
                <p className="instructions-subtitle">Instructions:</p>
                <p className="api-instructions">{exercise ? exercise.instructions : 'Loading...'}</p>
            </div>
        </div>
    )
}

export default Exercises