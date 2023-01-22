import React from 'react';
import Exercises from '../components/Exercises';
import useGetExercise from '../hooks/useGetExercise';
import "../styles/routine.scss";

const API = "https://api.api-ninjas.com/v1/exercises?muscle=";

const Routine = () => {
    const exercises = useGetExercise(API);//["...Loading"]//

    return (
        <div className="today-routine-container">
            <h2 className="routine-title title-basic">Today's Routine</h2>
            <div className="today-routine">
                {exercises.map((exercise, index)=> <Exercises key={index} exercise={exercise}/>)}
            </div>
        </div>
    )
}

export default Routine