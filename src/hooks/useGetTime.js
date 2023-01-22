import {useState, useEffect} from 'react';
import axios from 'axios';

const useGetTime = (API) => {
    const [time,setTime]= useState("");

    useEffect(() => {
        async function fetchData() {
            const response = await axios(API);
            setTime(response.data.datetime);
        }
        const intervalId = setInterval(fetchData, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return time;
}

export default useGetTime