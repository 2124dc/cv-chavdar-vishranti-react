import React, { useState } from 'react';
import './assignTableForm.css'; // Import custom CSS

const AssignTableForm = ({ onAssign, onCancel }) => {
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = () => {
    onAssign(customerName, mobileNumber);
  };

  return (
    <div className="assign-table-form">
      <h3>Assign Table</h3>
      <div>
        <label>Customer Name:</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>
      <div>
        <label>Mobile Number:</label>
        <input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleSubmit}>Assign Table</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default AssignTableForm;
