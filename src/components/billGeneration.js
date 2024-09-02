import React from 'react';
import './billGeneration.css'; // Import custom CSS

const BillGeneration = ({ status, onMarkAsPaid, onClose }) => {
  return (
    <div className="bill-generation">
      <h3>{status === 'success' ? 'Bill Generated Successfully' : 'Bill Generation Failed'}</h3>
      {status === 'success' && (
        <div>
          <p>Select Payment Method:</p>
          <select>
            <option value="cash">Cash</option>
            <option value="card">Card</option>
            <option value="upi">UPI</option>
          </select>
          <button onClick={() => onMarkAsPaid(document.querySelector('select').value)}>Mark as Paid</button>
        </div>
      )}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default BillGeneration;
