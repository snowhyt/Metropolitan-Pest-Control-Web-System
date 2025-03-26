import express, { Router } from 'express';
import authRouter from './routes/auth.routes.js';
import dotenv from 'dotenv';
dotenv.config();
import{ connectDB } from './libs/db.js';



const PORT = process.env.PORT || 5001;

const app = express();


app.use("/api/auth", authRouter);



app.listen(5001, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
    connectDB();
});

