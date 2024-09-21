// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Sidebar from '../../components/sidebar/sidebar';
import OperationsButtons from '../../components/dashboardOperations/operationsButtons';
import './dashboard.css';
import DashboardHome from '../../components/dashboardHome/dashboardHome';

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState('Home');
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     navigate('/login'); // Redirect to login page if no token is found
  //   }
  // }, [navigate]);

  const renderContent = () => {
    switch (selectedMenu) {
      case 'Operations':
        return <OperationsButtons />;
      case 'Orders':
        return <div>Orders Content</div>;
      case 'Home':
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="dashboard-container d-flex flex-column">
      <Header />
      <div className="d-flex flex-grow-1">
        <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
        <div className="content p-4">
          {renderContent()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
