import React from 'react';
import './Header.css'; 

function Header() {
  return (
    <div className="container">
      <nav className="navbar">
        <img src="./push.svg" alt="Logo" className="logo" />
        <ul className="nav-links">
          <li><a href="/">Home</a></li>

        </ul>
      </nav>
      <main className="main-section">
        <div className="background-image">

        </div>
        <div className="content">
          <h1>Добро пожаловать на наш вебсайт</h1>
          <p>Внизу вы найдете доступную вам информацию</p>
        </div>
      </main>
    </div>
  );
}

export default Header;