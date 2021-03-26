import 'reflect-metadata';
import './database';
import { router } from './routes';
import express from 'express';

const port = process.env.PORT || 3333;
const app = express();

app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Server is running on port ${port}.`));