import express, { Router } from 'express';
import authRouter from './routes/auth.routes.js';

const app = express();


app.use("/api/auth", authRouter);



app.listen(5001, ()=>{
    console.log("Server is running on 5001");
});

