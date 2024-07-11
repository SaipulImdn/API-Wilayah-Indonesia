// src/app.ts

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import wilayahRoutes from './routes/wilayah';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/wilayah', wilayahRoutes);

export default app;
