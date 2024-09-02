// src/pages/Dashboard.js
import React, { useState } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Sidebar from '../../components/sidebar/sidebar';
import OperationsButtons from '../../components/dashboardOperations/operationsButtons';
import './dashboard.css';
import DashboardHome from '../../components/dashboardHome/dashboardHome';

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState('Home');

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
