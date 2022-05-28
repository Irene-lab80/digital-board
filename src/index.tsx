import React from 'react';
// eslint-disable-next-line import/no-unresolved
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/styles/main.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
