import express from 'express';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import routes from './routes/routes.js'
import cors from 'cors';


const app = express();

dotenv.config();

// Middlewares
app.use(bodyParser.json());



app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'] 
}));

app.use("/", routes)



app.listen(process.env.PORT, ()=>{
    console.log(`Server is Running on ${process.env.PORT}`)
})

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log(`Database connected Successfully`)
}).catch((error)=>{
    console.log(error, `Database Not connected`)
})
