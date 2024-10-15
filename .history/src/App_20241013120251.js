import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
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
  }, []);

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
        {/* Mostrar Navbar apenas quando autenticado, com a função de logout */}
        {isAuthenticated && <Navbar onLogout={handleLogout} />} 

        <Routes>
          {/* Rota para a página de login */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} /> 

          {/* Rota principal - redireciona para login ou cadastro */}
          <Route 
            path="/" 
            element={!isAuthenticated ? <Navigate to="/login" /> : <Navigate to="/cadastro" />} 
          />

          {/* Rotas protegidas - Redireciona para /login se não estiver autenticado */}
          <Route 
            path="/cadastro" 
            element={isAuthenticated ? <Cadastro /> : <Navigate to="/login" />} 
          />
          {/* ... outras rotas protegidas ... */}
        </Routes>
      </div>
    </Router>
  );
};

// Componente Login com redirecionamento após login
const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLoginSubmit = () => {
    // ... sua lógica de login ...
    onLogin(); // Chama a função handleLogin do App para atualizar o estado de autenticação
    navigate('/cadastro'); // Redireciona para a página /cadastro após o login
  };

  // ... restante do seu componente Login ...
  // Certifique-se de chamar handleLoginSubmit no evento de submit do formulário
};

export default App;