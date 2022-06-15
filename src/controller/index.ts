import { Request, Response } from 'express';
import taskService from '../service';

const read = async (req: Request, res: Response) => {
  const task = await taskService.read();
  console.log('controller');

  return res.status(200).json(task);
}

export default {
  read,
}