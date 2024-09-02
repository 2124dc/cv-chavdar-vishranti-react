import React, { useState } from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import DataTable from '../common/dataTable';
import FoodItemModal from './FoodItemModal';
import TableItemModal from './TableItemModal';
import OrderModal from '../orderModal'; // New modal for orders
import ConfirmDeleteModal from '../common/confirmDeleteModal';
import './operationsButtons.css'; // Import custom CSS

const OperationsButtons = () => {
  const [selectedOperation, setSelectedOperation] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [data, setData] = useState([]);  // Placeholder for data
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleButtonClick = (operation) => {
    setSelectedOperation(operation);
    setData(getDataForOperation(operation)); // Implement this function
  };

  const handleShowModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalType('');
    setSelectedItem(null);
  };

  const handleShowDeleteConfirm = (item) => {
    setSelectedItem(item);
    setShowDeleteConfirm(true);
  };

  const handleCloseDeleteConfirm = () => {
    setShowDeleteConfirm(false);
    setSelectedItem(null);
  };

  const handleAdd = () => {
    handleShowModal('add');
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    handleShowModal('edit');
  };

  const handleDelete = () => {
    // Implement delete logic
    console.log('Deleted item:', selectedItem);
    handleCloseDeleteConfirm();
  };

  const handleSave = (formData) => {
    // Implement save logic for add/edit
    console.log('Saved data:', formData);
    handleCloseModal();
  };

  const columns = {
    food: {
      heading: 'Food Items',
      headers: ['sr no', 'Name', 'foodType', 'price per Unit', 'isActive'],
      fields: ['srNo', 'name', 'foodType', 'price', 'isActive']
    },
    table: {
      heading: 'Table Data',
      headers: ['sr no', 'currentStatus', 'tableArea', 'isActive', 'people Can seat'],
      fields: ['srNo', 'currentStatus', 'tableArea', 'isActive', 'peopleCanSeat']
    },
    order: {
      heading: 'Orders',
      headers: ['sr no', 'item name', 'qty', 'pricePerUnit', 'total price', 'edit', 'delete'],
      fields: ['srNo', 'itemName', 'qty', 'pricePerUnit', 'totalPrice']
    }
  };

  return (
    <div className="operations-buttons">
      <ButtonGroup className="mb-3">
        <Button
          variant={selectedOperation === 'food' ? 'primary' : 'secondary'}
          onClick={() => handleButtonClick('food')}
        >
          Manage Food Items
        </Button>
        <Button
          variant={selectedOperation === 'table' ? 'primary' : 'secondary'}
          onClick={() => handleButtonClick('table')}
        >
          Manage Table Items
        </Button>
        <Button
          variant={selectedOperation === 'order' ? 'primary' : 'secondary'}
          onClick={() => handleButtonClick('order')}
        >
          Manage Orders
        </Button>
        <Button
          variant={selectedOperation === 'logo' ? 'primary' : 'secondary'}
          onClick={() => handleButtonClick('logo')}
        >
          Update Hotel Logo
        </Button>
      </ButtonGroup>

      {selectedOperation && selectedOperation !== 'logo' && (
        <DataTable
          data={data}
          columns={columns[selectedOperation]}
          onEdit={handleEdit}
          onDelete={handleShowDeleteConfirm}
          onAdd={handleAdd}
        />
      )}

      {/* Modals */}
      {(modalType === 'add' || modalType === 'edit') && selectedOperation === 'food' && (
        <FoodItemModal
          show={showModal}
          onHide={handleCloseModal}
          type={modalType}
          item={selectedItem}
          onSave={handleSave}
        />
      )}
      {(modalType === 'add' || modalType === 'edit') && selectedOperation === 'table' && (
        <TableItemModal
          show={showModal}
          onHide={handleCloseModal}
          type={modalType}
          item={selectedItem}
          onSave={handleSave}
        />
      )}
      {(modalType === 'add' || modalType === 'edit') && selectedOperation === 'order' && (
        <OrderModal
          show={showModal}
          onHide={handleCloseModal}
          type={modalType}
          item={selectedItem}
          onSave={handleSave}
        />
      )}
      {showDeleteConfirm && (
        <ConfirmDeleteModal
          show={showDeleteConfirm}
          onHide={handleCloseDeleteConfirm}
          onConfirm={handleDelete}
          itemName={selectedItem?.name || 'Item'}
        />
      )}
    </div>
  );
};

// Dummy function for data retrieval
const getDataForOperation = (operation) => {
  if (operation === 'food') {
    return [
      { srNo: 1, name: 'Pizza', foodType: 'Main Course', price: 10, isActive: true },
      { srNo: 2, name: 'Burger', foodType: 'Snack', price: 5, isActive: true },
    ];
  } else if (operation === 'table') {
    return [
      { srNo: 1, currentStatus: 'Available', tableArea: 'Patio', isActive: true, peopleCanSeat: 4 },
      { srNo: 2, currentStatus: 'Occupied', tableArea: 'Indoor', isActive: false, peopleCanSeat: 2 },
    ];
  } else if (operation === 'order') {
    return [
      { srNo: 1, itemName: 'Pizza', qty: 2, pricePerUnit: 10, totalPrice: 20 },
      { srNo: 2, itemName: 'Burger', qty: 1, pricePerUnit: 5, totalPrice: 5 },
    ];
  }
  return [];
};

export default OperationsButtons;
