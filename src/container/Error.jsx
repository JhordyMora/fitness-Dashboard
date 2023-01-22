import React from 'react'
import Tired from '../assets/figures/Man_Tired_After_Workout_Cartoon.svg';
import "../styles/error.scss";

const Error = () => {
    return (
        <div className='error'>

            <p>Page not found</p>
            <p>Error 404</p>
            <img src={Tired}></img>
            <p>It is not you, it is us!😫 We promise</p>

        </div>
    )
}

export default Error