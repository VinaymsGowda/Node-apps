import express from "express";
import { startMetricsServer } from "./metrics.js";

const app=express();

app.get("/",(req,res)=>{
    console.log("Hello World");
    res.send("Hit / Route ");
})
app.get("/route1",(req,res)=>{
    console.log("Hello World");
    res.send("Hit /Route1 route ");
})
app.get("/route2",(req,res)=>{
    console.log("Hello World");
    res.send("Hit /Route2 ");
})

app.listen(5000,()=>{
    console.log("Port running on Port 5000");
})
startMetricsServer();