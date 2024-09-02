// src/components/TableStatus.js
import React from 'react';
import './tableStatus.css'; // Import custom CSS

const TableStatus = () => {
  const tables = Array.from({ length: 13 }, (_, i) => ({
    name: `Table ${i + 1}`,
    status: i % 2 === 0 ? 'Occupied' : 'Free', // Just for demonstration
  }));

  return (
    <div className="table-status">
      {tables.map((table, index) => (
        <div key={index} className={`table-block ${table.status.toLowerCase()}`}>
          <span>{table.name}</span>
          <span className={`status ${table.status.toLowerCase()}`}>
            {table.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TableStatus;
