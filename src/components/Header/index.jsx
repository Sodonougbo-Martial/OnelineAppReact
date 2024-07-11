import React from 'react';
import './styles.css';

function Header() {
  return (
    <header className="header">
      <span className="logo" style={{ fontSize: '50px' }}>FASCO</span>
      <ul className="menu">
        <li className="menu-items">Home</li>
        <li className="menu-items">Deals</li>
        <li className="menu-items">New Arrivals</li>
        <li className="menu-items">New</li>
        <li className="menu-items">SignIn</li>
        <li className="menu-items">
          <button className="btn">SignUp</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
