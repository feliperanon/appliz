import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'; // Corrigindo o caminho para Navbar
import Cadastro from './components/Cadastro'; // Corrigindo o caminho para Cadastro
import MedicaoTempo from './components/MedicaoTempo'; // Corrigindo o caminho para MedicaoTempo
import AnaliseDesempenho from './components/AnaliseDesempenho'; // Corrigindo o caminho para AnaliseDesempenho
import OcorrenciasDiarias from './components/OcorrenciasDiarias'; // Corrigindo o caminho para OcorrenciasDiarias
import ControleQualidade from './components/ControleQualidade'; // Corrigindo o caminho para ControleQualidade
import CapacitacaoTreinamento from './components/CapacitacaoTreinamento'; // Corrigindo o caminho para CapacitacaoTreinamento
import ManutencaoPreventiva from './components/ManutencaoPreventiva'; // Corrigindo o caminho para ManutencaoPreventiva
import CicloPDCA from './components/CicloPDCA'; // Corrigindo o caminho para CicloPDCA
import Login from './components/Login'; // Adicionar o componente de Login

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      {/* Somente mostrar a Navbar se o usuário estiver autenticado */}
      {isAuthenticated && <Navbar />}

      <Routes>
        {/* Rota para Login */}
        <Route path="/" element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/cadastro" />} />
        
        {/* As demais rotas só ficam acessíveis se o usuário estiver autenticado */}
        {isAuthenticated && (
          <>
            <Route path="/cadastro" element={<Cadastro />} />
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
