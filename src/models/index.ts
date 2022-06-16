import model from './connectionDb';
import { ITask, ITaskBody } from '../interfaces';

const read = async (): Promise<ITask[]> => {
  const task = await model.find();

  return task;
};

const create = async (tarefa: ITaskBody): Promise<ITask> => {
  const task = await model.create(tarefa);
  console.log(task);

  return {
    _id: task._id,
    task: tarefa.task,
    status: tarefa.status,
  }
};

const update = async (id: number, task: string, status: string): Promise<ITask | undefined> => {
  const verifyId = findOne(id);
  if (!verifyId) return undefined;
  const updateTask = await model.updateOne({ _id: id, task, status });

  return {
    _id: id,
    task,
    status,
  }
};

const findOne =  async (id: number): Promise<ITask | undefined> => {
  const find = await model.findById({ _id: id });
  console.log('>>>>>>>', find)
  if (!find) return undefined;

  return find;
}

export default {
  read,
  create,
  update,
}