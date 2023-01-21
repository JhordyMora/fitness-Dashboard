import React from 'react';

const Age = ({persona}) => {
    return (
        <div className="age">
            <p className="title-age">Age [y.o.]:</p>
            <p className="age-user">{persona.age}</p>
        </div>
    )
}

export default Age