import React from 'react';
import legs from "../assets/icons/legs.png";

const Legs = () => {
    return (
        <div className="training-card legs">
            <div className="title-training-cards">
                <img src={legs} alt="legs" />
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
    )
}

export default Legs