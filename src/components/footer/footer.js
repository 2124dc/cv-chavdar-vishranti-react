// src/components/Footer.js
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="d-flex justify-content-between align-items-center p-3 bg-light mt-auto">
      <div>
        <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-instagram-logo.png" alt="Instagram" style={{ height: '30px', marginRight: '10px' }} />
        </a>
        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-facebook-logo.png" alt="Facebook" style={{ height: '30px' }} />
        </a>
      </div>
      <div>
        <p className="mb-0">&copy; 2024 Chavdar Vishranti. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
