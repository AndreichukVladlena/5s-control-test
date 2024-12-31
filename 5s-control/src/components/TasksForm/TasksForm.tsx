import React, { useState, useEffect } from 'react';
import './TasksForm.css';
import {Task} from '../../types/index';
import TaskModal from '../TaskModal/TaskModal';


const TasksForm: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [filter, setFilter] = useState<string>(''); 

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const saveTasks = (updatedTasks: Task[]) => {
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const addTask = (task: Task) => {
    const newTasks = [...tasks, task];
    saveTasks(newTasks);
  };

  const editTask = (updatedTask: Task) => {
    const newTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    saveTasks(newTasks);
  };

  const deleteTask = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    saveTasks(newTasks);
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const text = await file.text();
      const importedTasks = JSON.parse(text);
      saveTasks(importedTasks);
    }
  };

  const filteredTasks = tasks.filter(
    (task) => !filter || task.status === filter
  );

  console.log(filteredTasks);
  const handleExport = () => {
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(tasks))}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'tasks.json');
    downloadAnchor.click();
  };

  return (
    <div className="tasks">
      <div className="tasks-controls">
        <button onClick={() => setIsModalOpen(true)}>Добавить задачу</button>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">Все</option>
          <option value="Новая">Новая</option>
          <option value="В работе">В работе</option>
          <option value="Завершена">Завершена</option>
        </select>
        <button onClick={handleExport}>Экспорт задач</button>
        <input
          type="file"
          accept="application/json"
          id="file-upload"
          onChange={handleImport}
          className="tasks-controls-input"
        />
        <label htmlFor="file-upload" className="custom-file-label">
          Загрузить файл
        </label>

      </div>
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
          {filteredTasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td>{task.status}</td>
              <td>{task.date}</td>
              <td>
                <button onClick={() => { setCurrentTask(task); setIsModalOpen(true); }}>Редактировать</button>
                <button onClick={() => deleteTask(task.id)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <TaskModal
          onClose={() => { setIsModalOpen(false); setCurrentTask(null); }}
          onSave={(task) => {
            if (currentTask) {
              editTask(task);
            } else {
              addTask({ ...task, id: Date.now() });
            }
            setIsModalOpen(false);
            setCurrentTask(null);
          }}
          task={currentTask}
        />
      )}
    </div>
  );
};

export default TasksForm;
