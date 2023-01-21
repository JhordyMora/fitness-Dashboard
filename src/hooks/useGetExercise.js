import { useEffect, useState} from 'react';
import axios from "axios";

const useGetExercise = (API) => {
    const [part, setPart] = useState([]);
    const exercisesList = []

    const bodyParts = [ 
        [`biceps`,`triceps`,`forearms`],
        [`chest`,`abdominals`],
        [`abductors`,`adductors`,`calves`,`quadriceps`,`hamstrings`,`glutes`]
    ]

    useEffect(()=>{
        async function fetchData() {
            for(const bodyPart of bodyParts){
                // console.log(bodyPart);
                const randomPart = Math.floor(Math.random() * bodyPart.length);
                const response = await axios(API+bodyPart[randomPart], {headers: { 'X-Api-Key':"JtQssZZO0f0yOtDlcimGNw==RnX9aC7PbMseNuf8"}});
                const randomExercise = Math.floor(Math.random() * 10);
                exercisesList.push(response.data[randomExercise]);
            }
            setPart(exercisesList);
            // console.log(exercisesList);
        }
        fetchData();
    },[])
    return part;
}

export default useGetExercise