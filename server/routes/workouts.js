const express = require("express");

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
route.post("/", (req, res)=>{
    res.json({message:"create a new workout"});
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