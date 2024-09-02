// src/components/TableItemModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const TableItemModal = ({ show, onHide, type, item, onSave }) => {
  const [formData, setFormData] = useState({
    currentStatus: '',
    tableArea: '',
    isActive: true,
    peopleCanSeat: '',
  });

  useEffect(() => {
    if (type === 'edit' && item) {
      setFormData({
        currentStatus: item.currentStatus || '',
        tableArea: item.tableArea || '',
        isActive: item.isActive || true,
        peopleCanSeat: item.peopleCanSeat || '',
      });
    }
  }, [type, item]);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'isActive' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{type === 'edit' ? 'Edit Table Item' : 'Add Table Item'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formCurrentStatus">
            <Form.Label>Current Status</Form.Label>
            <Form.Control
              type="text"
              name="currentStatus"
              value={formData.currentStatus}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formTableArea">
            <Form.Label>Table Area</Form.Label>
            <Form.Control
              type="text"
              name="tableArea"
              value={formData.tableArea}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPeopleCanSeat">
            <Form.Label>People Can Seat</Form.Label>
            <Form.Control
              type="number"
              name="peopleCanSeat"
              value={formData.peopleCanSeat}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formIsActive">
            <Form.Check
              type="checkbox"
              name="isActive"
              label="Active"
              checked={formData.isActive}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {type === 'edit' ? 'Save Changes' : 'Add Item'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TableItemModal;
