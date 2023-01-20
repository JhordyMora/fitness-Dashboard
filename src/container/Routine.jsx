import React from 'react';
import Arms from "../components/Arms";
import Abs from '../components/Abs';
import Legs from '../components/Legs';
import "../styles/routine.scss";



const Routine = () => {
    return (
        <div className="today-routine-container">
            <h2 className="routine-title title-basic">Today's Routine</h2>
            <div className="today-routine">
                <Arms/>
                <Abs/>
                <Legs/>
            </div>
        </div>
    )
}

export default Routine