import React from 'react';
import './TasksPage.css';
import '../../components/TasksForm/TasksForm';
import TasksForm from '../../components/TasksForm/TasksForm';

const TasksPage: React.FC = () => {
  return (
    <>
        <h1>Задачи</h1>
        <TasksForm />
    </>
  );
};

export default TasksPage;