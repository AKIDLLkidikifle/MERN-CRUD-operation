const express = require("express");
const Workout = require("../model/workoutModel");

const route = express.Router();

//get all workouts
route.get("/", (req, res)=>{
    res.json({message:"get all ork outs"})
});

//get a single workout
route.get("/:id", (req, res)=>{
    res.json({message:"get a single requiest"});
});

//post new workout
route.post("/", async(req, res)=>{
    const {title, load, reps} = req.body;
    try{
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    }
    catch(err){
         res.status(400).json({errer: err.message});
    };


});

//delete workout
route.delete("/:id", (req, res)=>{
    res.json({message:"delete workout"});
});

//update a single workout
route.patch("/:id", (req, res)=>{
    res.json({message:"update a specific workout"});
});


module.exports = route;