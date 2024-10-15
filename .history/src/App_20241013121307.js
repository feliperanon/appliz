import React, { useState } from 'react';
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
import CadastroColaborador from './components/CadastroColaborador'; // Página específica de cadastro
import CadastroCliente from './components/CadastroCliente'; // Página específica de cadastro
import CadastroEquipamento from './components/CadastroEquipamento'; // Página específica de cadastro
import CadastroStatus from './components/CadastroStatus'; // Página específica de cadastro
import CadastroUsuario from './components/CadastroUsuario'; // Página específica de cadastro

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      {isAuthenticated && <Navbar />} {/* Mostrar Navbar apenas quando autenticado */}

      <Routes>
        {/* Rota para Login */}
        <Route path="/" element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/cadastro" />} />
        
        {/* Rotas protegidas */}
        {isAuthenticated && (
          <>
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/cadastro/colaborador" element={<CadastroColaborador />} />
            <Route path="/cadastro/cliente" element={<CadastroCliente />} />
            <Route path="/cadastro/equipamento" element={<CadastroEquipamento />} />
            <Route path="/cadastro/status" element={<CadastroStatus />} />
            <Route path="/cadastro/usuario" element={<CadastroUsuario />} />
            <Route path="/medicao-tempo" element={<MedicaoTempo />} />
            <Route path="/analise-pdca" element={<AnaliseDesempenho />} />
            <Route path="/ocorrencias" element={<OcorrenciasDiarias />} />
            <Route path="/controle-qualidade" element={<ControleQualidade />} />
            <Route path="/capacitacao" element={<CapacitacaoTreinamento />} />
            <Route path="/manutencao" element={<ManutencaoPreventiva />} />
            <Route path="/ciclo-pdca" element={<CicloPDCA />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
