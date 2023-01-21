import React, { useState, useEffect } from 'react';
import armsIcon from "../assets/icons/biceps.png";
import axios from "axios";

// const API = "https://api.api-ninjas.com/v1/exercises?muscle=";
const armsMuscle = [
    `biceps`,
    `triceps`,
    `forearms`,
]

const Arms = () => {
    const [arms, setArms]=useState([]);

    useEffect(()=>{
        async function fetchData() {
            const randomArmPart = Math.floor(Math.random() * armsMuscle.length);
            const response = await axios(API+armsMuscle[randomArmPart], {headers: { 'X-Api-Key':"JtQssZZO0f0yOtDlcimGNw==RnX9aC7PbMseNuf8"}});
            const randomExercise = Math.floor(Math.random() * 10);
            setArms(response.data[randomExercise]);
            // console.log(response.data[randomExercise]);
        }
        fetchData();
    },[])

    return (
        <div className="training-card arms">
            <div className="title-training-cards">
            <img src={armsIcon} alt="arms" />
            <h2 className="subtitle-routine">Arms</h2>
            </div>
            <div className="info-training-cards">
            <p className="name-training-subtitle">Name:</p>
            <p className="api-name">{arms.name}</p>
            <p className="equipment-subtitle">Equipment:</p>
            <p className="api-equipment">{arms.equipment}</p>
            <p className="difficulty-subtitle">Difficulty:</p>
            <p className="api-difficulty">{arms.difficulty}</p>
            <p className="instructions-subtitle">Instructions:</p>
            <p className="api-instructions">{arms.instructions}</p>
        </div>
    </div>
    )
}

export default Arms