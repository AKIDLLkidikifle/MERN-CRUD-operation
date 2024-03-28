import { useEffect, useState } from "react";
import WorkoutDetail from "../components/workoutdetails";

function Home(){
    const [workouts, setworkouts] = useState(null);

    useEffect(()=>{
        const fetchWorkouts = async()=>{
            const response = await  fetch("/api/workouts");
            const json = await response.json();

            if(response.ok){
                setworkouts(json);
            }

        }

        fetchWorkouts();

    },[])

    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetail key={workout._id} element={workout} />
                ))}
            </div>
        </div>
    )
}

export default Home;