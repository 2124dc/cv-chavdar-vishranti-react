import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

// Find the root element in your HTML
const rootElement = document.getElementById('root');

// Create a root using React 18's createRoot method
const root = ReactDOM.createRoot(rootElement);

// Render your App component inside the root
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
