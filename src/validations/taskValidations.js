import Joi from 'joi';

export const createTaskSchema = Joi.object({
  title: Joi.string().min(3).max(50).required(),
  color: Joi.string().pattern(/^#[0-9A-Fa-f]{6}$/).required(),
});

export const updateTaskSchema = Joi.object({
  title: Joi.string().min(3).max(50),
  color: Joi.string().pattern(/^#[0-9A-Fa-f]{6}$/),
  completed: Joi.boolean(),
}).or('title', 'color', 'completed'); 