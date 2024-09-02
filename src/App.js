// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';
// import HotelRegistration from './pages/hotelRegistration';
// import TableManagement from './pages/tableManagement';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/hotel-registration" element={<HotelRegistration />} /> */}
        {/* <Route path="/table-management" element={<TableManagement />} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

