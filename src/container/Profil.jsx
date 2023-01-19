import React from 'react';
import "../styles/profil.scss";

const Profil = ({children}) => {
    return (
        <aside className="profil-container">
        <h1 className="title-profi title-basic">
            Personal Information
        </h1>
        <img className="image-profil" src="data:image/jpeg;base64,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" alt="user" />
        {children}
        <div className="info-profil">
            <p className="name-user">Jhordy Mora</p>
            <div className="age">
            <p className="title-age">Age [y.o.]:</p>
            <p className="age-user">31</p>
            </div>
            <div className="height">
            <p className="title-height">Height[cm]:</p>
            <p className="height-user">170</p>
            </div>
            <div className="weight">
            <p className="title-weight">Weight[kg]:</p>
            <p className="weight-user">65</p>
            </div>
            <div className="gender">
            <p className="title-gender">Gender:</p>
            <p className="gender-user">Male</p>
            </div>
            <div className="bmi">
            <p className="title-bmi">BMI:</p>
            <p className="bmi-user">20</p>
            </div>
        </div>
        <div className="time">
            <div className="date">Fecha</div>
            <div className="hours">hours</div>
        </div>
        </aside>
    )
}

export default Profil