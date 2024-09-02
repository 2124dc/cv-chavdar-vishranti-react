// src/pages/DashboardHome.js
import React, { useState } from 'react';
import TableStatus from '../tableStatus/tableStatus';
import MetricsSection from '../metricsSection/metricsSection';
import Popup from '../popup';
import AssignTableForm from '../assignTableForm';
import OrderTable from '../orderTable';
import BillGeneration from '../billGeneration';
import './dashboardHome.css'; // Import custom CSS

const DashboardHome = () => {
  const [tableStatus, setTableStatus] = useState('green'); // Example status
  const [orders, setOrders] = useState([]);
  const [billStatus, setBillStatus] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleAssignTable = (customerName, mobileNumber) => {
    // Logic for assigning table
    setShowPopup(false);
  };

  const handleAddOrder = (order) => {
    setOrders([...orders, order]);
  };

  const handleEditOrder = (updatedOrder) => {
    setOrders(orders.map(order => order.srNo === updatedOrder.srNo ? updatedOrder : order));
  };

  const handleDeleteOrder = (deletedOrder) => {
    setOrders(orders.filter(order => order.srNo !== deletedOrder.srNo));
  };

  const handleGenerateBill = () => {
    // API call to generate bill
    const response = 'success'; // Replace with actual API response
    setBillStatus(response);
    setShowPopup(true);
  };

  const handleMarkAsPaid = (method) => {
    // Logic to mark as paid
    setShowPopup(false);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  const content =
    tableStatus === 'green' ? (
      <AssignTableForm onAssign={handleAssignTable} onCancel={() => setShowPopup(false)} />
    ) : (
      <OrderTable
        orders={orders}
        onAdd={handleAddOrder}
        onEdit={handleEditOrder}
        onDelete={handleDeleteOrder}
        onGenerateBill={handleGenerateBill}
        onCancel={handleCancel}
      />
    );

  return (
    <div className="dashboard-home">
      <div className="left-section">
        <TableStatus setShowPopup={setShowPopup} setTableStatus={setTableStatus} />
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
      {showPopup && (
        <Popup
          title={tableStatus === 'green' ? 'Assign Table' : 'Manage Orders'}
          content={content}
          onClose={() => setShowPopup(false)}
        />
      )}
      {billStatus && (
        <Popup
          title="Bill Status"
          content={
            <BillGeneration
              status={billStatus}
              onMarkAsPaid={handleMarkAsPaid}
              onClose={() => setBillStatus(null)}
            />
          }
          onClose={() => setBillStatus(null)}
        />
      )}
    </div>
  );
};

export default DashboardHome;
