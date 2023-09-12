import express from "express";
import router from "./routes/routes.js";
import cors from 'cors';
import { DbConnection } from "./database/db.js";
import dotenv from 'dotenv'
dotenv.config();
const port=process.env.PORT || 8000;


const app = express();


app.use(cors());
app.use('/',router);
app.get('/',(req,res)=>{
    res.json("hello")
})

DbConnection();

app.listen(port,()=>console.log(`server running on port ${port}`));