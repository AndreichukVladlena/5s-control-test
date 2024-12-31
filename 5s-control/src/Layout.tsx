import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from "react-router-dom";
// import './Layout.css';

const Layout: React.FC = () => {
  return (
    <div className="layout">
        <Header />
        <Outlet/>
    </div>
  );
};

export default Layout;
