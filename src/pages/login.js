// src/pages/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import './login.css'; // Custom styles for additional tweaks

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { username, password };
    dispatch(login(user));
    console.log('Logged in:', user);
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Login</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group mb-3">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block w-100">
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="mb-0">If you want to register, please contact the admin.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;