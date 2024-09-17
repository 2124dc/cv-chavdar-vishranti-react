import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const apiUrl = process.env.REACT_APP_API_URL;
    console.log('API URL:', apiUrl); // Add this for debugging

    // Add 'async' here
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`${apiUrl}/cv-auth/auth/login`, {
                username,
                password
            });

            // Save token to local storage or context
            localStorage.setItem('token', response.data.token);

            // Redirect to dashboard on successful login
            navigate('/dashboard');
        } catch (error) {
            if (error.response) {
                // Server responded with a status other than 2xx
                setError(error.response.data.message || 'Login failed. Please try again.');
            } else if (error.request) {
                // Request was made but no response received
                setError('No response from the server. Please try again later.');
            } else {
                // Something happened setting up the request
                setError('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Login</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    );
};

export default LoginPage;
