import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import tasksRoute from './routes/tasks.js';
import db from '../config/db.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', tasksRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
