export type TaskStatus = TaskStatusEnum.TODO | TaskStatusEnum.DOING | TaskStatusEnum.DONE;

export enum TaskStatusEnum {
  TODO = 'to-do',
  DOING = 'doing',
  DONE = 'done',
}

export interface Icomment {
  id: string;
  description: string;
}

export interface ITask {
  id: string;
  name: string;
  description: string;
  comments: Icomment[];
  status: TaskStatus;
}
