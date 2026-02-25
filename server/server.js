import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js";
dotenv.config()
const app = express()
connectDB()
app.use("/",(req,res)=>{
    res.send("Working")
})
app.listen(process.env.PORT,()=>{
    console.log("App is listening");
})