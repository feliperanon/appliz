import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
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
  const location = useLocation(); // Obtém a URL atual

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

  // Função para renderizar o componente com base na URL e no estado de autenticação
  const renderComponent = (component, redirectPath = "/") => {
    return isAuthenticated ? component : <Navigate to={redirectPath} />;
  };

  return (
    <Router>
      <div>
        {/* Mostrar Navbar apenas quando autenticado, com a função de logout */}
        {isAuthenticated && <Navbar onLogout={handleLogout} />}

        <Routes>
          {/* Rota para Login */}
          <Route 
            path="/" 
            element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Cadastro />}
          />

          {/* Rotas protegidas - Renderiza o componente ou redireciona para / */}
          <Route
            path="/cadastro"
            element={renderComponent(<Cadastro />)}
          />
          <Route
            path="/cadastro/colaborador"
            element={renderComponent(<CadastroColaborador />)}
          />
          <Route
            path="/cadastro/cliente"
            element={renderComponent(<CadastroCliente />)}
          />
          {/* ... outras rotas protegidas ... */}
          <Route
            path="/ciclo-pdca"
            element={renderComponent(<CicloPDCA />)}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;