import { useWorkoutsContext } from "../hooks/useWorkoutcontext";

function Detail(props){
const {dispatch} = useWorkoutsContext();

    const handleclick = async() => {
        console.log(props.element._id);
        const response =  await fetch("/api/workouts/" + props.element._id, {
            method: "DELETE"
        });

        const json = await response.json();
        if(response.ok){
            dispatch({type: "DELETE_WORKOUT", payload: json});
        }
    }

    return(
        <div className="workout-details">
            <h4>{props.element.title}</h4>
            <p><strong>Load (kg): </strong>{props.element.reps}</p>
            <p><strong>Reps: </strong>{props.element.load}</p>
            <p>{props.element.createdAt}</p>
            <button onClick={handleclick}>delete</button>
        </div>
    )
}

export default Detail;