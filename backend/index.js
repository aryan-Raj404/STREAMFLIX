import express from "express"
const app = express();
import dotenv from "dotenv";
import databaseConnection from './utils/database.js';
import cookieParser from "cookie-parser";
dotenv.config();
import cors from "cors";

import userRoute from "./routes/userRoute.js";

databaseConnection();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({origin : "https://netmirror-fqzj.onrender.com", credentials : true})); // Allow credentials for cookies   

app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT || 8080,()=>{
    console.log(`server listening on port ${process.env.PORT}`);
})
