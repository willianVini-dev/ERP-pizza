import express, { Request, Response, NextFunction } from 'express';
import { routes } from './routes/index';
import cors from 'cors'
import path from 'path';

const app = express();
app.use(express.json());
app.use(cors())


app.use('/api',routes);
app.use('/files',
  express.static(path.resolve(__dirname, '..', 'tmp'))
)


app.listen(3000, () => console.log("Backend running"));