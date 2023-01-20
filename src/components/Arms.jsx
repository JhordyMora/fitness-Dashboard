import React from 'react';
import arms from "../assets/icons/biceps.png";

const Arms = () => {
    return (
        <div className="training-card arms">
            <div className="title-training-cards">
            <img src={arms} alt="arms" />
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
            <p className="api-instructions">instructions from api</p>
        </div>
    </div>
    )
}

export default Arms