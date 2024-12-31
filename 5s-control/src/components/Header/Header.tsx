import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="outer-header">
      <div className='header'>
      <div className="header-logo">
        <Link to={"/"}>
          <img alt="" width="72" height="72" src="https://5scontrol.com/images/main/logo.svg"/>
        </Link>
      </div>
      <nav className="header-nav">
        <Link to={"/"} className="header-link">Главная </Link>
        <Link to={"/tasks"} className="header-link">Задачи 5s</Link>
        <Link to={"/contacts"} className="header-link">Контакты </Link>
      </nav>
      </div>
    </header>
  );
};

export default Header;