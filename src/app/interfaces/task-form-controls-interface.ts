import { TaskStatus } from '../services/task-interface';

export interface ITaskFormControls {
  id?: string;
  name: string;
  description: string;
  status?: TaskStatus;
}
