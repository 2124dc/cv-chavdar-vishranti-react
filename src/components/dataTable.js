// src/components/DataTable.js
import React from 'react';
import { Button, Table } from 'react-bootstrap';

const DataTable = ({ data, columns, onEdit, onDelete, onAdd }) => {
  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <h4>{columns.heading}</h4>
        <Button
          variant="success"
          onClick={onAdd}
        >
          Add item/table
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {columns.headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {columns.fields.map((field, fieldIndex) => (
                <td key={fieldIndex}>{item[field]}</td>
              ))}
              <td>
                <Button
                  variant="warning"
                  onClick={() => onEdit(item)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="ms-2"
                  onClick={() => onDelete(item)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
