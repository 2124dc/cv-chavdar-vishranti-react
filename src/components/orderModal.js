// src/components/OrderModal.js
import React, { useState, useEffect } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const OrderModal = ({ show, onHide, type, order, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    pricePerUnit: '',
    totalPrice: ''
  });

  useEffect(() => {
    if (type === 'edit' && order) {
      setFormData({
        name: order.name,
        pricePerUnit: order.pricePerUnit,
        totalPrice: order.totalPrice
      });
    }
  }, [type, order]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{type === 'add' ? 'Add Order' : 'Edit Order'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPricePerUnit">
            <Form.Label>Price Per Unit</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price per unit"
              name="pricePerUnit"
              value={formData.pricePerUnit}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formTotalPrice">
            <Form.Label>Total Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter total price"
              name="totalPrice"
              value={formData.totalPrice}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default OrderModal;
