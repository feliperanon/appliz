import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cadastro from './components/Cadastro';
import MedicaoTempo from './components/MedicaoTempo';
import AnaliseDesempenho from './components/AnaliseDesempenho';
import OcorrenciasDiarias from './components/OcorrenciasDiarias';
import ControleQualidade from './components/ControleQualidade';
import CapacitacaoTreinamento from './components/CapacitacaoTreinamento';
import ManutencaoPreventiva from './components/ManutencaoPreventiva';
import CicloPDCA from './components/CicloPDCA';
import Login from './components/Login';
import CadastroColaborador from './components/CadastroColaborador';
import CadastroCliente from './components/CadastroCliente';
import CadastroEquipamento from './components/CadastroEquipamento';
import CadastroStatus from './components/CadastroStatus';
import CadastroUsuario from './components/CadastroUsuario';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verifique se o usuário já está autenticado (ex: token no localStorage)
    const token = localStorage.getItem('token'); 
    if (token) {
      setIsAuthenticated(true);
    }
  }, []); // Executa apenas uma vez ao montar o componente

  const handleLogin = () => {
    // Lógica de autenticação (ex: salvar token no localStorage)
    localStorage.setItem('token', 'seuTokenAqui'); // Substitua 'seuTokenAqui' pelo token real
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Lógica de logout (ex: remover token do localStorage)
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div> 
        {isAuthenticated && <Navbar onLogout={handleLogout} />} 

        <Routes>
          <Route 
            path="/" 
            element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/cadastro" />} 
          />
          
          {/* Rotas protegidas */}
          <Route 
            path="/cadastro" 
            element={isAuthenticated ? <Cadastro /> : <Navigate to="/" />} 
          />
          <Route 
            path="/cadastro/colaborador" 
            element={isAuthenticated ? <CadastroColaborador /> : <Navigate to="/" />} 
          />
          {/* ... outras rotas protegidas ... */}
          <Route 
            path="/medicao-tempo" 
            element={isAuthenticated ? <MedicaoTempo /> : <Navigate to="/" />} 
          />
          {/* ... outras rotas protegidas ... */}
          <Route 
            path="/ciclo-pdca" 
            element={isAuthenticated ? <CicloPDCA /> : <Navigate to="/" />} 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;