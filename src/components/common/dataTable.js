// src/common/DataTable.js
import React from 'react';

const DataTable = ({ data = [], columns, onEdit, onDelete, onAdd }) => {
  if (!data || !Array.isArray(data)) {
    console.error('DataTable received invalid data:', data);
    return null;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.key}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.map(col => (
                <td key={col.key}>{item[col.key]}</td>
              ))}
              <td>
                <button onClick={() => onEdit(item)}>Edit</button>
                <button onClick={() => onDelete(item)}>Delete</button>
              </td>
            </tr>
          ))}
          {data.length > 0 && (
            <tr>
              <td colSpan={columns.length + 1}>Total Amount: {data.reduce((acc, curr) => acc + curr.totalPrice, 0)}</td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={onAdd}>Add Record</button>
    </div>
  );
};

export default DataTable;
