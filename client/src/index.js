import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelloContextProvider } from './components/HelloContext';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloContextProvider>
      <App />
    </HelloContextProvider>
  </React.StrictMode>
);
