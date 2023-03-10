import { useEffect, useState} from 'react';
import axios from "axios";

const useGetWeatherComming = (API) => {
    const [weatherForecast, setWeatherForecast] = useState([]);

    let calendarDay;

    let infoComingDays = []

    useEffect(()=>{
        async function fetchData() {
            const response = await axios(API);
            calendarDay = (response.data.list[0].dt_txt).substring(0, 10);
            for(let i in response.data.list){
                if((response.data.list[i].dt_txt).substring(0, 10) != calendarDay){
                    infoComingDays.push(response.data.list[i]);
                    calendarDay = (response.data.list[i].dt_txt).substring(0, 10);
                }
            }
            // console.log(infoComingDays);
            setWeatherForecast(infoComingDays);

        }
        const intervalId = setInterval(fetchData,10800000); // Every 3 hours it will be updated
        fetchData();
        return () => clearInterval(intervalId);
    },[])

    return weatherForecast;
}

export default useGetWeatherComming