import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const databaseConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Database connected successfully");
    }).catch((error)=>{
        console.log("Database connection failed", error);
    });
}

export default databaseConnection;