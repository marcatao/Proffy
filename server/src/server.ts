import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(777);
console.log('Hello Worlds on port 777');