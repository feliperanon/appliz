import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Cadastro from './pages/Cadastro';
import MedicaoTempo from './pages/MedicaoTempo';
import AnaliseDesempenhoPDCA from './pages/AnaliseDesempenhoPDCA';
import OcorrenciasDiarias from './pages/OcorrenciasDiarias';
import ControleQualidade from './pages/ControleQualidade';
import CapacitacaoTreinamento from './pages/CapacitacaoTreinamento';
import ManutencaoPreventiva from './pages/ManutencaoPreventiva';
import CicloPDCAMelhoria from './pages/CicloPDCAMelhoria';

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={() => <h2>Bem-vindo à Tela Principal</h2>} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/medicao-tempo" component={MedicaoTempo} />
        <Route path="/analise-pdca" component={AnaliseDesempenhoPDCA} />
        <Route path="/ocorrencias" component={OcorrenciasDiarias} />
        <Route path="/controle-qualidade" component={ControleQualidade} />
        <Route path="/capacitacao" component={CapacitacaoTreinamento} />
        <Route path="/manutencao" component={ManutencaoPreventiva} />
        <Route path="/ciclo-pdca" component={CicloPDCAMelhoria} />
      </Switch>
    </Router>
  );
};

export default App;
