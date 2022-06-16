import taskModel from '../models';
import { ITask, ITaskBody } from '../interfaces';

const read = async (): Promise<ITask[]> => {
  const task = await taskModel.read();

  return task;
};

const create = async (tarefa: ITaskBody): Promise<ITask> => {
  const task = await taskModel.create(tarefa);

  return task;
};

const update = async (id: number, task: string, status: string): Promise<ITask | undefined> => {
  const updteTask = await taskModel.update(id, task, status);
  if (!updteTask) return undefined;
  
  return updteTask;
}

export default {
  read,
  create,
  update,
}