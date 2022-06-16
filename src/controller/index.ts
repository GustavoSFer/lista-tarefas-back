import { Request, Response } from 'express';
import taskService from '../service';

const read = async (req: Request, res: Response) => {
  const task = await taskService.read();

  return res.status(200).json(task);
};

const create = async (req: Request, res: Response) => {
  const { task, status } = req.body;
  const result = await taskService.create({ task, status });

  return res.status(201).json(result);
}

export default {
  read,
  create,
}