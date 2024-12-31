import React from 'react';
import { TasksTableProps } from '../../types/taskTable';
import './TasksTable.css';


const TasksTable: React.FC<TasksTableProps> = ({ tasks, onEditTask, onDeleteTask }) => {
  const handleDeleteTask = (taskId: number) => {
    const confirmDelete = window.confirm(
      'Вы уверены, что хотите удалить задачу?'
    );
    if (confirmDelete) {
      onDeleteTask(taskId);
    }
  };

  return (
    <table className="tasks-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Название задачи</th>
          <th>Статус</th>
          <th>Дата</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.id}</td>
            <td>{task.name}</td>
            <td>{task.status}</td>
            <td>{task.date}</td>
            <td>
              <button onClick={() => onEditTask(task)}>Редактировать</button>
              <button onClick={() => handleDeleteTask(task.id)}>Удалить</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TasksTable;
