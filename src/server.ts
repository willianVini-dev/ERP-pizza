import express, { Request, Response, NextFunction } from 'express';
import { routes } from './routes/index';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())


app.use('/api',routes);


app.listen(3000, () => console.log("Backend running"));