import React from 'react';
import ReactDOM from 'react-dom/client'; // Agora importamos 'react-dom/client' ao invés de 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o Bootstrap
import './global.css'; // Importa o CSS global onde as cores foram definidas
import App from './App';

// Seleciona o elemento root do HTML
const rootElement = document.getElementById('root');

// Utilizando createRoot para renderizar a aplicação
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
