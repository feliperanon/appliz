import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Arquivo CSS que terá estilos globais
import App from './App'; // Certifique-se de que App.js esteja correto

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
