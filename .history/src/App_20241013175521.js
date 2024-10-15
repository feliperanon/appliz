import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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

  // Verifica o estado de autenticação ao carregar o componente
  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    // Salva o estado de autenticação no localStorage
    localStorage.setItem('isAuthenticated', 'true'); 
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <Router>
      <div>
        {/* Mostrar Navbar apenas quando autenticado, com a função de logout */}
        {isAuthenticated && <Navbar onLogout={handleLogout} />}

        <Routes>
          {/* Rota para Login, redireciona para /cadastro se autenticado */}
          <Route 
            path="/" 
            element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/cadastro" />} 
          />

          {/* Rotas protegidas - Redireciona para / se não estiver autenticado */}
          <Route
            path="/cadastro"
            element={isAuthenticated ? <Cadastro /> : <Navigate to="/" />}
          />
          <Route
            path="/cadastro/colaborador"
            element={isAuthenticated ? <CadastroColaborador /> : <Navigate to="/" />}
          />
          <Route
            path="/cadastro/cliente"
            element={isAuthenticated ? <CadastroCliente /> : <Navigate to="/" />}
          />
          <Route
            path="/cadastro/equipamento"
            element={isAuthenticated ? <CadastroEquipamento /> : <Navigate to="/" />}
          />
          <Route
            path="/cadastro/status"
            element={isAuthenticated ? <CadastroStatus /> : <Navigate to="/" />}
          />
          <Route
            path="/cadastro/usuario"
            element={isAuthenticated ? <CadastroUsuario /> : <Navigate to="/" />}
          />
          <Route
            path="/medicao-tempo"
            element={isAuthenticated ? <MedicaoTempo /> : <Navigate to="/" />}
          />
          <Route
            path="/analise-pdca"
            element={isAuthenticated ? <AnaliseDesempenho /> : <Navigate to="/" />}
          />
          <Route
            path="/ocorrencias"
            element={isAuthenticated ? <OcorrenciasDiarias /> : <Navigate to="/" />}
          />
          <Route
            path="/controle-qualidade"
            element={isAuthenticated ? <ControleQualidade /> : <Navigate to="/" />}
          />
          <Route
            path="/capacitacao"
            element={isAuthenticated ? <CapacitacaoTreinamento /> : <Navigate to="/" />}
          />
          <Route
            path="/manutencao"
            element={isAuthenticated ? <ManutencaoPreventiva /> : <Navigate to="/" />}
          />
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