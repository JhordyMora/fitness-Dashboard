import React from 'react';
import useGetTime from '../hooks/useGetTime';
import "../styles/time.scss";
import "../styles/hours.scss";
import "../styles/date.scss";

const API = "https://worldtimeapi.org/api/timezone/Europe/Berlin";

const Time = () => {

    const time = useGetTime(API);//"...Loading"//

    return (
    <div className="time">
        <div className="date">{time.substring(0,10)}</div>
        <div className="hours">{time.substring(11,19)}</div>
    </div>
    )
}

export default Time