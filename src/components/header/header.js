// src/components/Header.js
import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-light">
      <div className="header-logo">
        <img src="/path-to-hotel-logo.png" alt="Hotel Logo" style={{ height: '50px' }} />
      </div>
      <div className="header-title text-center">
        <h1>Hotel Name</h1>
      </div>
      <div className="header-right text-end">
        <p className="mb-0">Powered by Chavdar Vishranti</p>
        <p className="mb-0">{currentTime.toLocaleString()}</p>
      </div>
    </header>
  );
};

export default Header;
