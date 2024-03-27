require("dotenv").config();
const express = require("express");

const app = express();

app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

app.get("/", (req, res)=>{
    res.json({message:"welcome to mern stack"});
})

app.listen(process.env.PORT,()=>{
     console.log("server is running on port number 3000");
})
