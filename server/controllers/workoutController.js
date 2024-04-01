const Workout = require("../model/workoutModel");
const mongoose = require("mongoose");

//get all workout
const getWorkout = async(req, res)=>{
    const workouts = await Workout.find({}).sort({createdAt:-1});
    res.status(200).json(workouts);
};

//get a single workout
const singleWorkout = async (req, res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "there is no such file"});
    };
    const workout = await Workout.findById(id);

    // if(!workout){
    //    return res.status(404).json({error: "there is no such file"});
    // }
    res.status(200).json(workout);
};

//create new workout
const createWorkout = async(req, res)=>{

    const {title, load, reps} = req.body;
    
    const emptyFields = [];
    if(!title){
        emptyFields.push("title");
    }
    if(!load){
        emptyFields.push("load");
    }
    if(!reps){
        emptyFields.push("reps");
    }

    if(emptyFields.length > 0){
       res.status(400).json({error: "please fill out all the fields", emptyFields})
    }

    try{
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    }
    catch(err){
         res.status(400).json({errer: err.message});
    };
}

//delete workout
const deleteWorkout = async(req, res)=>{
      const {id} = req.params;
      
      if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "there is no such file"});
      };

      const workout= await Workout.findOneAndDelete({_id:id});
      res.status(200).json(workout);
}

//update workout
const updateWorkout = async(req, res)=>{
    const {id} = req.params;
      
    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({error: "there is no such file"});
    };

    const workout= await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })
    res.status(200).json(workout);

}

module.exports = {getWorkout,singleWorkout, createWorkout, updateWorkout, deleteWorkout}