import taskModel from '../models';
import { ITask, ITaskBody } from '../interfaces';

const read = async (): Promise<ITask[]> => {
  const task = await taskModel.read();

  return task;
};

const create = async (tarefa: ITaskBody): Promise<ITask> => {
  const task = await taskModel.create(tarefa);

  return task;
}

export default {
  read,
  create,
}