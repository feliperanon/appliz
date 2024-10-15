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
    localStorage.setItem('isAuthenticated', 'true'); // Salva no localStorage para manter a autenticação após o refresh
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <Router>
      <div>
        {isAuthenticated && <Navbar onLogout={handleLogout} />}

        <Routes>
          {/* Rota de login */}
          <Route 
            path="/" 
            element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/cadastro" />} 
          />

          {/* Rotas protegidas */}
          {isAuthenticated ? (
            <>
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/cadastro/colaborador" element={<CadastroColaborador />} />
              <Route path="/cadastro/cliente" element={<CadastroCliente />} />
              <Route path="/cadastro/equipamento" element={<CadastroEquipamento />} />
              <Route path="/cadastro/status" element={<CadastroStatus />} />
              <Route path="/cadastro/usuario" element={<CadastroUsuario />} />
              <Route path="/medicao-tempo" element={<MedicaoTempo />} />
              <Route path="/analise-desempenho" element={<AnaliseDesempenho />} />
              <Route path="/ocorrencias" element={<OcorrenciasDiarias />} />
              <Route path="/controle-qualidade" element={<ControleQualidade />} />
              <Route path="/capacitacao" element={<CapacitacaoTreinamento />} />
              <Route path="/manutencao" element={<ManutencaoPreventiva />} />
              <Route path="/ciclo-pdca" element={<CicloPDCA />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/" />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
