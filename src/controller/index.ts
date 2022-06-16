import { NextFunction, Request, Response } from 'express';
import taskService from '../service';

const read = async (req: Request, res: Response) => {
  const task = await taskService.read();

  return res.status(200).json(task);
};

const create = async (req: Request, res: Response) => {
  const { task, status } = req.body;
  const result = await taskService.create({ task, status });

  return res.status(201).json(result);
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  const { id, task, status} = req.body;
  const resultUpdate = await taskService.update(id, task, status);
  if (!resultUpdate) return next({ error: 404, message: 'Task não existe!' });

  return res.status(200).json(resultUpdate)
};

const remove = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const delTask = await taskService.remove(id);
  if (!delTask) return next({ error: 404, message: 'Task não existe!' });

  return res.status(200).json(delTask);
}

export default {
  read,
  create,
  update,
  remove,
}