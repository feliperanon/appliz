import React from 'react';
import ReactDOM from 'react-dom/client';  // Importa a nova API de renderização do React 18
import 'bootstrap/dist/css/bootstrap.min.css';  // Importa o Bootstrap para estilização
import './global.css';  // Importa o CSS global para definir estilos
import App from './App';  // Importa o componente principal da aplicação

// Seleciona o elemento root do HTML
const rootElement = document.getElementById('root');

// Utilizando createRoot para renderizar a aplicação com React 18
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
