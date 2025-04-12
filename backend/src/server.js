import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';
dotenv.config();
import{ connectDB } from './libs/db.js';



const PORT = process.env.PORT || 5001;

const app = express();
app.use(express.json());


//middleware
app.use(cookieParser());

app.use("/api/auth", authRoutes);



app.listen(5001, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
    connectDB();
});

