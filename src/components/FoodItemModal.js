// src/components/FoodItemModal.js
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const FoodItemModal = ({ show, onHide, type, item, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    foodType: '',
    price: '',
    isActive: true,
  });

  useEffect(() => {
    if (type === 'edit' && item) {
      setFormData({
        name: item.name || '',
        foodType: item.foodType || '',
        price: item.price || '',
        isActive: item.isActive || true,
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
        <Modal.Title>{type === 'edit' ? 'Edit Food Item' : 'Add Food Item'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formFoodType">
            <Form.Label>Food Type</Form.Label>
            <Form.Control
              type="text"
              name="foodType"
              value={formData.foodType}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Price per Unit</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
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

export default FoodItemModal;
