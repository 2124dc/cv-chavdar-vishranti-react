// src/pages/DashboardHome.js
import React from 'react';
import TableStatus from '../components/tableStatus';
import MetricsSection from '../components/metricsSection';
import './dashboardHome.css'; // Import custom CSS

const DashboardHome = () => {
  return (
    <div className="dashboard-home">
      <div className="left-section">
        <TableStatus />
      </div>
      <div className="right-section">
        <MetricsSection title="Daily" metrics={[
          { label: 'Today\'s Completed Orders', value: 5, spinner: true },
          { label: '$ Today', value: '754', spinner: true },
          { label: 'Random Spinner', value: 23, spinner: true }
        ]} />
        <MetricsSection title="Monthly" metrics={[
          { label: 'Total Completed Orders for Current Month', value: 943, spinner: true },
          { label: '$ Current Month', value: '2400', spinner: true },
          { label: 'Random Spinner', value: 45, spinner: true }
        ]} />
      </div>
    </div>
  );
};

export default DashboardHome;
