// src/components/OrderTable.js
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import DataTable from './common/dataTable';
import OrderModal from './orderModal';

const OrderTable = ({ orders = [], onAdd, onEdit, onDelete, onGenerateBill, onCancel }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleShowModal = (type, order) => {
    setModalType(type);
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalType('');
    setSelectedOrder(null);
  };

  const columns = [
    { key: 'srNo', label: 'Sr No' },
    { key: 'name', label: 'Name' },
    { key: 'pricePerUnit', label: 'Price Per Unit' },
    { key: 'totalPrice', label: 'Total Price' },
    { key: 'edit', label: 'Edit' },
    { key: 'delete', label: 'Delete' }
  ];

  const totalAmount = orders.reduce((sum, order) => sum + order.totalPrice, 0);

  return (
    <div>
      <DataTable
        data={orders}
        columns={columns}
        onEdit={(item) => handleShowModal('edit', item)}
        onDelete={(item) => onDelete(item)}
        onAdd={() => handleShowModal('add')}
      />
      <div className="total-row">
        <strong>Total Amount: {totalAmount}</strong>
      </div>
      <Button variant="primary" onClick={onGenerateBill}>Generate Bill</Button>
      <Button variant="secondary" onClick={onCancel}>Cancel</Button>

      <OrderModal
        show={showModal}
        onHide={handleCloseModal}
        type={modalType}
        order={selectedOrder}
        onSave={(formData) => {
          if (modalType === 'add') {
            onAdd(formData);
          } else if (modalType === 'edit') {
            onEdit(formData);
          }
          handleCloseModal();
        }}
      />
    </div>
  );
};

export default OrderTable;
