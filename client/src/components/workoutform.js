import {useState} from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutcontext"

function Workoutform(){
    const {dispatch} = useWorkoutsContext()
    const[title, settitle] = useState("");
    const[load, setload] = useState("");
    const[reps, setreps] = useState("");
    const[error, seterror] = useState(null);

    const HandleSubmit  = async(event)=>{
       event.preventDefault();

       const workout = {title, load, reps};

       const response = await fetch("/api/workouts/",{
           method: "POST",
           body: JSON.stringify(workout),
           headers:{
              "Content-Type": "application/json"
           }
       });
       const json = await response.json();

       if(!response.ok){
           seterror(json.errer);
       }

       if(response.ok){
           seterror(null);
           settitle("");
           setload("");
           setreps("");
           console.log("new workout is added", json);
           dispatch({type: "CREATE_WORKOUT", payload: json});
       }

    }

    return(
         <form className="create" onSubmit={HandleSubmit}>
            <h3>Add new workouts</h3>
            <label>Exercise title:</label>
            <input type="text"  onChange={(event)=>{settitle(event.target.value)}} value={title} />

            <label>Load (in kg):</label>
            <input type="number"  onChange={(event)=>{setload(event.target.value)}} value={load} />

            <label>Reps:</label>
            <input type="number"  onChange={(event)=>{setreps(event.target.value)}} value={reps} />

            <button>Add workout</button>
            {error && <div className="error">{error}</div>}
         </form>
    )
}

export default Workoutform;