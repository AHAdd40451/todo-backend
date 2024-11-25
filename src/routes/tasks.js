import express from 'express';
import {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    getTaskById,
} from '../controllers/taskController.js';
import validate from '../middleware/validate.js';
import { createTaskSchema, updateTaskSchema } from '../validations/taskValidations.js';

const router = express.Router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTaskById);
router.post('/tasks', validate(createTaskSchema), createTask);
router.put('/tasks/:id', validate(updateTaskSchema), updateTask);
router.delete('/tasks/:id', deleteTask);

export default router;
