import model from './connectionDb';

const read = async () => {
  const task = await model.find();
  console.log('model');

  return task;
}

export default {
  read,
}