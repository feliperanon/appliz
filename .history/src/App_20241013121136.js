import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <div> {/* Adicionei uma div aqui */}
        {isAuthenticated && <Navbar />}

        <Routes>
          <Route path="/" element={!isAuthenticated ? <Login onLogin={handleLogin} /> : <Navigate to="/cadastro" />} />

          {/* Rotas protegidas */}
          <Route path="/cadastro" element={isAuthenticated ? <Cadastro /> : <Navigate to="/" />} >
            <Route path="colaborador" element={<CadastroColaborador />} />
            <Route path="cliente" element={<CadastroCliente />} />
            <Route path="equipamento" element={<CadastroEquipamento />} />
            <Route path="status" element={<CadastroStatus />} />
            <Route path="usuario" element={<CadastroUsuario />} />
          </Route>

          {/* Outras rotas protegidas */}
          {isAuthenticated && (
            <>
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
      </div> {/* Fechando a div */}
    </Router>
  );
};

export default App;