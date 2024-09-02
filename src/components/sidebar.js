// src/components/Sidebar.js
import React from 'react';
import './sidebar.css';

const Sidebar = ({ selectedMenu, setSelectedMenu }) => {
  return (
    <div className="sidebar bg-light">
      <ul className="nav flex-column">
        <li className={`nav-item ${selectedMenu === 'Home' ? 'active' : ''}`}>
          <button className="nav-link btn-link" onClick={() => setSelectedMenu('Home')}>Home</button>
        </li>
        <li className={`nav-item ${selectedMenu === 'Operations' ? 'active' : ''}`}>
          <button className="nav-link btn-link" onClick={() => setSelectedMenu('Operations')}>Operations</button>
        </li>
        <li className={`nav-item ${selectedMenu === 'Orders' ? 'active' : ''}`}>
          <button className="nav-link btn-link" onClick={() => setSelectedMenu('Orders')}>Orders</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
