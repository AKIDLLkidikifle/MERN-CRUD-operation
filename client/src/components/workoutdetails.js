function Detail(props){
    return(
        <div className="workout-details">
            <h4>{props.element.title}</h4>
            <p><strong>Load (kg): </strong>{props.element.reps}</p>
            <p><strong>Reps: </strong>{props.element.load}</p>
            <p>{props.element.createdAt}</p>
        </div>
    )
}

export default Detail;