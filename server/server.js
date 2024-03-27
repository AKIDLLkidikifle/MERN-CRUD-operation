require("dotenv").config();
const express = require("express");
const workoutRoute = require("./routes/workouts");

//express app
const app = express();

//middleware
// app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

//routes
app.use("/api/workouts",workoutRoute);


//listen for the requiest
app.listen(process.env.PORT,()=>{
     console.log("server is running on port number ");
})
