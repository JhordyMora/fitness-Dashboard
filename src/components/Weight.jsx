import React from 'react';

const Weight = ({persona}) => {
    return (
        <div className="weight">
            <p className="title-weight">Weight [kg]:</p>
            <p className="weight-user">{persona ? persona.weight : 'Loading...'}</p>
        </div>
    )
}

export default Weight