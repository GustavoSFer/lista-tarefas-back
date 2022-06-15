import taskModel from '../models';

const read = async () => {
  const task = await taskModel.read();
  console.log('service');

  return task;
};

export default {
  read,
}