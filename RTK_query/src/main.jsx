import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { productApi } from './store/productApi.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={productApi}> 
    <App />
    </ApiProvider>
  </React.StrictMode>,
)
