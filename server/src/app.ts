import express from 'express';
import type {Application} from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

import {errorHandler,logger,notFound} from './middlewares'
import routes from './routes';
const app:Application = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

// Custom Logger
app.use(logger);



app.get('/', (req,res)=>{
    res.send("Expense Tracker API is running 🚀")
})
app.use('/api',routes);


app.use(notFound)
app.use(errorHandler)

export default app;