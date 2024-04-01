const express = require("express");
const {createWorkout, singleWorkout, getWorkout,updateWorkout, deleteWorkout} = require("../controllers/workoutController");

const route = express.Router();

//get all workouts
route.get("/", getWorkout);

//get a single workout
route.get("/:id",singleWorkout);

//post new workout
route.post("/", createWorkout);

//delete workout
route.delete("/:id",deleteWorkout);

//update a single workout
route.patch("/:id", updateWorkout);


module.exports = route;
