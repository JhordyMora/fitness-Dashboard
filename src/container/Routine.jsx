import React from 'react';
import "../styles/routine.scss";

const Routine = () => {
    return (
        <div className="today-routine-container">
            <h2 className="routine-title title-basic">Today's Routine</h2>
            <div className="today-routine">
            <div className="training-card arms">
                <div className="title-training-cards">
                <img src="../assets/icons/biceps.png" alt="arms" />
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
            <div className="training-card abs">
                <div className="title-training-cards">
                <img src="../assets/icons/abs.png" alt="abs" />
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
                <img src="../assets/icons/legs.png" alt="legs" />
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
    )
}

export default Routine