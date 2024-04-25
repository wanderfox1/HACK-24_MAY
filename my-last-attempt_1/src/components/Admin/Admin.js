import React from 'react';
import './Admin.css'; 
import { Dropdown } from 'react-bootstrap';

function Header() {
  return (
    <div className="container">
      <nav className="navbar">
        <img src="./push.svg" alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="/">Изменить роль</a></li>
          <li><a href="/">Добавить уведомление в БД</a></li>
          <li><a href="/">Удалить пользователя</a></li>


        </ul>
        
        <Dropdown className="nav-links">
          <Dropdown.Toggle variant="none" id="dropdown-basic">
            Dropdown
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-custom">
            <Dropdown.Item className="dropdown-item-custom" href="#/action-1">Изменить роль</Dropdown.Item>
            <Dropdown.Item className="dropdown-item-custom" href="#/action-2">Добавить уведомление в БД</Dropdown.Item>
            <Dropdown.Item className="dropdown-item-custom" href="#/action-3">Удалить пользователя</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </nav>
      <main className="main-section-admin">
        <div className="background-image-admin">

        </div>
        <div className="content">
          <h1>Добро пожаловать на админ панель</h1>
        </div>
      </main>
    </div>
  );
}

export default Header;