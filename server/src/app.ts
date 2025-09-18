import express from 'express';
import type {Application} from 'express';

import cors from 'cors';


const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(cors());


app.get('/', (req,res)=>{
    res.send("Expense Tracker API is running 🚀")
})


export default app;