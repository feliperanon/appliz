import Links from './components/Links';

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
