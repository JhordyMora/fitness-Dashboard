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

    const muscleToImage = [
        "../assets/icons/biceps.png",
        "../assets/icons/abs.png",
        "../assets/icons/legs.png",
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
            for(let index in muscleToImage){
                exercisesList[index].icon = muscleToImage[index];
                // console.log(exercisesList[index].icon);
            }

            setPart(exercisesList);
            // console.log(exercisesList);
        }
        const intervalId = setInterval(fetchData, 120000);//Every hour will be update 
        fetchData();
        return () => clearInterval(intervalId);
    },[])
    return part;
}

export default useGetExercise