import {Task} from './index';

export type TaskModalProps = {
  onClose: () => void;
  onSave: (task: Task) => void;
  task?: Task | null;
};