import { useState, useEffect } from "react";
import axios from "axios";

export const useGetInfoUser = (API) => {
    const [persona, setPersona] = useState([]);

    // useEffect(()=>{
    //     async function fetchData() {
    //         const randomPersona = Math.floor(Math.random() * 100);
    //         const response = await axios(API+randomPersona);
    //         setPersona(response.data);
    //         // console.log(response.data);
    //     }
    //     fetchData();
    // },[])
    // return persona

    useEffect(()=>{
        async function fetchData() {
            const randomPersona = Math.floor(Math.random() * 100);
            const response = await axios(API+randomPersona);
            setPersona(response.data);
            // console.log(response.data);
        }
        const intervalId = setInterval(fetchData, 60000);
        fetchData();
        return () => clearInterval(intervalId); 
    },[])
    return persona
}

export default useGetInfoUser
