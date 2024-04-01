import { useWorkoutsContext } from "../hooks/useWorkoutcontext";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

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
            <p>{formatDistanceToNow(new Date(props.element.createdAt), { addSuffix: true })}</p>
        
            <span className="material-symbols-outlined" onClick={handleclick}>delete</span>
        </div>
        
    )
}

export default Detail;