import React, { useState, useEffect } from 'react';
import './TasksForm.css';
import { Task } from '../../types';
import TaskModal from '../TaskModal/TaskModal';
import TasksControls from '../TasksControls/TasksControls';
import TasksTable from '../TasksTable/TasksTable';

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

  const handleExport = () => {
    const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(tasks))}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'tasks.json');
    downloadAnchor.click();
  };

  const filteredTasks = tasks.filter(
    (task) => !filter || task.status === filter
  );

  return (
    <div className="tasks">
      <TasksControls
        filter={filter}
        onFilterChange={setFilter}
        onExport={handleExport}
        onImport={handleImport}
        onAddTask={() => setIsModalOpen(true)}
      />
      <TasksTable
        tasks={filteredTasks}
        onEditTask={(task) => {
          setCurrentTask(task);
          setIsModalOpen(true);
        }}
        onDeleteTask={deleteTask}
      />
      {isModalOpen && (
        <TaskModal
          onClose={() => {
            setIsModalOpen(false);
            setCurrentTask(null);
          }}
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
