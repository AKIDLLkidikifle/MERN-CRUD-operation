import { useEffect} from "react";
import WorkoutDetail from "../components/workoutdetails";
import Workoutform from "../components/workoutform";
import { useWorkoutsContext } from "../hooks/useWorkoutcontext"

function Home(){
    const {workouts, dispatch} = useWorkoutsContext();

    useEffect(()=>{
        const fetchWorkouts = async()=>{
            const response = await  fetch("/api/workouts");
            const json = await response.json();

            if(response.ok){
                dispatch({type: "SET_WORKOUTS", payload: json})
            }

        }

        fetchWorkouts();

    },[dispatch])

    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>(
                    <WorkoutDetail key={workout._id} element={workout} />
                ))}
            </div>
            <div>
                <Workoutform />
            </div>
        </div>
    )
       
}

export default Home;