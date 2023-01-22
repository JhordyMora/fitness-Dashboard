import React from 'react';
import useGetTime from '../hooks/useGetTime';
import "../styles/time.scss";
import "../styles/hours.scss"

const API = "https://worldtimeapi.org/api/timezone/Europe/Berlin";

const Time = () => {

    const time = useGetTime(API);

    return (
    <div className="time">
        <div className="date">Fecha: {time.substring(0,10)}</div>
        <div className="hours">hours {time.substring(11,19)}</div>
    </div>
    )
}

export default Time