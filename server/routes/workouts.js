const express = require("express");
const {createWorkout, singleWorkout, getWorkout} = require("../controllers/workoutController");

const route = express.Router();

//get all workouts
route.get("/", getWorkout);

//get a single workout
route.get("/:id",singleWorkout);

//post new workout
route.post("/", createWorkout);

//delete workout
route.delete("/:id", (req, res)=>{
    res.json({message:"delete workout"});
});

//update a single workout
route.patch("/:id", (req, res)=>{
    res.json({message:"update a specific workout"});
});


module.exports = route;