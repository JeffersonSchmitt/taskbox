import { Task } from "./task.model";

export interface TaskStateModel {
  tasks: Task[];
  status: 'idle' | 'loading' | 'success' | 'error';
  error: boolean;
}
