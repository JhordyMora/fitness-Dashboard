import React, { useEffect, useState} from 'react';
import absIcon from "../assets/icons/abs.png";
import "../styles/trainningCards.scss";
import axios from "axios";

// const API = "https://api.api-ninjas.com/v1/exercises?muscle=";
const absMuscle = [
    `chest`,
    `abdominals`,
]

const Abs = () => {
    const [abs, setAbs] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const randomAbsPart = Math.floor(Math.random() * absMuscle.length);
            const response = await axios(API+absMuscle[randomAbsPart], {headers: { 'X-Api-Key':"JtQssZZO0f0yOtDlcimGNw==RnX9aC7PbMseNuf8"}});
            const randomExercise = Math.floor(Math.random() * 10);
            setAbs(response.data[randomExercise]);
            // console.log(response.data[randomExercise]);
        }
        fetchData();
    },[])

    return (
        <div className="training-card abs">
            <div className="title-training-cards">
            <img src={absIcon} alt="abs" />
            <h2 className="subtitle-routine">Abs/Chest</h2>
            </div>
            <div className="info-training-cards">
            <p className="name-training-subtitle">Name:</p>
            <p className="api-name">{abs.name}</p>
            <p className="equipment-subtitle">Equipment:</p>
            <p className="api-equipment">{abs.equipment}</p>
            <p className="difficulty-subtitle">Difficulty:</p>
            <p className="api-difficulty">{abs.difficulty}</p>
            <p className="instructions-subtitle">Instructions:</p>
            <p className="api-instructions">{abs.instructions}</p>
            </div>
        </div>
    )
}

export default Abs