import React, { useEffect, useState} from 'react';
import legsIcon from "../assets/icons/legs.png";
import axios from "axios";

// const API = "https://api.api-ninjas.com/v1/exercises?muscle=";
const legsMuscle = [
    `abductors`,
    `adductors`,
    `calves`,
    `quadriceps`,
    `hamstrings`,
    `glutes`,
]

const Legs = () => {
    const [legs, setLegs] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const randomLegPart = Math.floor(Math.random() * legsMuscle.length);
            const response = await axios(API+legsMuscle[randomLegPart], {headers: { 'X-Api-Key':"JtQssZZO0f0yOtDlcimGNw==RnX9aC7PbMseNuf8"}});
            const randomExercise = Math.floor(Math.random() * 10);
            setLegs(response.data[randomExercise]);
            // console.log(response.data[randomExercise]);
        }
        fetchData();
    },[])

    return (
        <div className="training-card legs">
            <div className="title-training-cards">
                <img src={legsIcon} alt="legs" />
                <h2 className="subtitle-routine">Legs</h2>
            </div>
            <div className="info-training-cards">
                <p className="name-training-subtitle">Name:</p>
                <p className="api-name">{legs? legs.name : "Loading..."}</p>
                <p className="equipment-subtitle">Equipment:</p>
                <p className="api-equipment">{legs? legs.equipment : "Loading..."}</p>
                <p className="difficulty-subtitle">Difficulty:</p>
                <p className="api-difficulty">{legs? legs.difficulty : "Loading..."}</p>
                <p className="instructions-subtitle">Instructions:</p>
                <p className="api-instructions">{legs? legs.instructions : "Loading..."}</p>
            </div>
        </div>
    )
}

export default Legs