import React from 'react';

const Gender = ({persona}) => {
    return (
        <div className="gender">
            <p className="title-gender">Gender:</p>
            <p className="gender-user">{persona ? persona.gender : 'Loading...'}</p>
        </div>
    )
}

export default Gender