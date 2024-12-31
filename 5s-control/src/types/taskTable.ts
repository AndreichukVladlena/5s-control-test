import {Task} from './index';

export type TasksTableProps = {
  tasks: Task[];
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
}