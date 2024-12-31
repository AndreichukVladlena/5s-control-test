import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './Layout';
import IndexPage from './pages/Index/IndexPage';
import TasksPage from './pages/Tasks/TasksPage';


function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<IndexPage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Route>
    </Routes>
  );
}

export default App;
