import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import MedicaoTempo from './components/MedicaoTempo';
import AnaliseDesempenho from './components/AnaliseDesempenho';
import OcorrenciasDiarias from './components/OcorrenciasDiarias';
import ControleQualidade from './components/ControleQualidade';
import CapacitacaoTreinamento from './components/CapacitacaoTreinamento';
import ManutencaoPreventiva from './components/ManutencaoPreventiva';
import CicloPDCA from './components/CicloPDCA';
import Links from './components/Links'; // Página com links para os tópicos

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/links" element={<Links />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/medicao-tempo" element={<MedicaoTempo />} />
        <Route path="/analise-desempenho" element={<AnaliseDesempenho />} />
        <Route path="/ocorrencias-diarias" element={<OcorrenciasDiarias />} />
        <Route path="/controle-qualidade" element={<ControleQualidade />} />
        <Route path="/capacitacao-treinamento" element={<CapacitacaoTreinamento />} />
        <Route path="/manutencao-preventiva" element={<ManutencaoPreventiva />} />
        <Route path="/ciclo-pdca" element={<CicloPDCA />} />
      </Routes>
    </Router>
  );
}

export default App;
