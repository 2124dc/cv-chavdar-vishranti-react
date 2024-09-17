import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Handle Logout with confirmation
  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to log out?');
    if (confirmed) {
      localStorage.removeItem('token'); // Remove the token or any user data
      navigate('/login'); // Redirect to login page after logout
    }
  };

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
      <div className="profile-dropdown">
        <FaUserCircle className="profile-icon" />
        <div className="dropdown-menu">
          <ul>
            <li>My Profile</li>
            <li onClick={handleLogout}>Logout</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
