import React from 'react';
import {TasksControlsProps} from '../../types/taskControls';
import './TasksControls.css';

const TasksControls: React.FC<TasksControlsProps> = ({
  filter,
  onFilterChange,
  onExport,
  onImport,
  onAddTask,
}) => {
  return (
    <div className="tasks-controls">
      <button onClick={onAddTask}>Добавить задачу</button>
      <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">Все</option>
        <option value="Новая">Новая</option>
        <option value="В работе">В работе</option>
        <option value="Завершена">Завершена</option>
      </select>
      <button onClick={onExport}>Экспорт задач</button>
      <input
        type="file"
        accept="application/json"
        id="file-upload"
        onChange={onImport}
        className="tasks-controls-input"
      />
      <label htmlFor="file-upload" className="custom-file-label">
        Загрузить файл
      </label>
    </div>
  );
};

export default TasksControls;
