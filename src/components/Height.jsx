import React from 'react'

const Height = ({persona}) => {
    return (
        <div className="height">
            <p className="title-height">Height [cm]:</p>
            <p className="height-user">{persona ? persona.height : 'Loading...'}</p>
        </div>
    )
}

export default Height