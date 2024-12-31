import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './Layout';
import IndexPage from './pages/Index/IndexPage';
import TasksPage from './pages/Tasks/TasksPage';
import ContactsPage from './pages/Contacts/ContactsPage';


function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<IndexPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
    </Routes>
  );
}

export default App;
