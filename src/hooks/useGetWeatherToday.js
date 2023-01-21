import { useEffect, useState} from 'react';
import axios from "axios";

const useGetWeatherToday = (API) => {
    const [weather, setWeather] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            const response = await axios(API);
            setWeather(response.data);
            console.log(response.data);
        }
        fetchData();
    },[])
    return weather;
}

export default useGetWeatherToday