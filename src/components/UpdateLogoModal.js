// src/components/UpdateLogoModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const UpdateLogoModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Update Hotel Logo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Add your form for updating the logo here */}
        <p>Form for updating the hotel logo goes here.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
        <Button variant="primary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateLogoModal;
