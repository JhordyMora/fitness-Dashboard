import React, { useEffect, useState} from 'react';
import "../styles/time.scss";
import axios from "axios";

// const API = "https://worldtimeapi.org/api/timezone/Europe/Berlin";

const Time = () => {
    const [time,setTime]= useState("");

    useEffect(() => {
        async function fetchData() {

            const response = await axios(API);
            setTime(response.data.datetime);
        }
        fetchData();
    }, []);

    return (
    <div className="time">
        <div className="date">Fecha: {time.substring(0,10)}</div>
        <div className="hours">hours {time.substring(11,19)}</div>
    </div>
    )
}

export default Time