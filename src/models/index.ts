import model from './connectionDb';
import { ITask, ITaskBody } from '../interfaces';

const read = async (): Promise<ITask[]> => {
  const task = await model.find();

  return task;
}

const create = async (tarefa: ITaskBody) => {
  const task = await model.create(tarefa);
  console.log(task);

  return {
    _id: task._id,
    task: tarefa.task,
    status: tarefa.status,
  }
}

export default {
  read,
  create,
}