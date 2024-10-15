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
  // ... (código anterior) ...

  return (
    <Router>
      <div>
        {/* ... (código anterior) ... */}

        <Routes>
          {/* ... (código anterior) ... */}

          {/* Rota principal - redireciona para login SOMENTE se NÃO estiver autenticado */}
          <Route 
            path="/" 
            element={!isAuthenticated ? <Navigate to="/login" /> : null} 
          />

          {/* ... (código anterior) ... */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;