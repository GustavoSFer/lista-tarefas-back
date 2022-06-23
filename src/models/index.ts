import model from './connectionDb';
import { ITask, ITaskBody } from '../interfaces';

const read = async (): Promise<ITask[]> => {
  const task = await model.find();

  return task;
};

const create = async (tarefa: ITaskBody): Promise<ITask> => {
  const task = await model.create(tarefa);

  return {
    _id: task._id,
    task: tarefa.task,
    status: tarefa.status,
  }
};

const update = async (id: string, task: string, status: string): Promise<ITask | undefined> => {
  const verifyId = await findOne(id);
  if (!verifyId) return undefined;
  await model.updateOne({ _id: id, task, status });

  return {
    _id: id,
    task,
    status,
  }
};

const findOne =  async (id: string): Promise<ITask | undefined> => {
  const find = await model.findOne({ _id: id });
  if (!find) return undefined;

  return find;
};

const remove = async (id: string): Promise<ITask | undefined> => {
  const verifyId = await findOne(id);
  if (!verifyId) return undefined;
  await model.deleteOne({ _id: id });

  return { 
    _id: id,
    task: 'removido',
    status: 'já era',
  };
}

export default {
  read,
  create,
  update,
  remove,
}