export interface ITaskBody {
  task: string,
  status: string,
};

export interface ITask extends ITaskBody {
  _id: number,
}