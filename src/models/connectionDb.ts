import mongoose from 'mongoose';

mongoose.connect(process.env.DB_MONGO || 'mongodb://localhost:27017/task-db');

const taskSchema = new mongoose.Schema({
  task: String,
  status: String,
}, {
  versionKey: false
});

const model =  mongoose.model('Task', taskSchema);

export default model;
