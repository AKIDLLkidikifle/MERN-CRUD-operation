require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workoutRoute = require("./routes/workouts");

//express app
const app = express();

//middleware
app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

//routes
app.use("/api/workouts",workoutRoute);

//connect to mongoDb atlas

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    //listen for the requiest
    app.listen(process.env.PORT,()=>{
      console.log("connected to db and server is running on port number "+process.env.PORT);
    });

}).catch((err)=>{
   console.log(err);
});



