import React from 'react';
import abs from "../assets/icons/abs.png";
import "../styles/trainningCards.scss";

const Abs = () => {
    return (
        <div className="training-card abs">
                    <div className="title-training-cards">
                    <img src={abs} alt="abs" />
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
    )
}

export default Abs