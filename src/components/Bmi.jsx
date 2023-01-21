import React from 'react'

const Bmi = ({persona}) => {
    return (
        <div className="bmi">
            <p className="title-bmi">BMI:</p>
            <p className="bmi-user">{persona ? (persona.weight /(persona.height/100)**2).toFixed(2) : 'Loading...'}</p>
        </div>
    )
}

export default Bmi