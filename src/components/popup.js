import React from 'react';
import './popup.css'; // Import custom CSS for styling

const Popup = ({ title, content, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{title}</h2>
        <div>{content}</div>
        {/* <button onClick={onClose}>Close</button> */}
      </div>
    </div>
  );
};

export default Popup;
