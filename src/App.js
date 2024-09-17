// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './pages/login/login';
// import Dashboard from './pages/dashboard/dashboard';
// import PrivateRoute from './PrivateRoute';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';
import PrivateRoute from './PrivateRoute'; // The PrivateRoute component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        {/* Protected Route for Dashboard */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;


