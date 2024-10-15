import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <h2 className="text-primary mb-4">Escolha uma Página</h2>
      <div className="d-grid gap-2 col-6 mx-auto">
        <Link to="/cadastro" className="btn color1">Cadastro (Central de Dados)</Link>
        <Link to="/medicao-tempo" className="btn color2">Medição de Tempo</Link>
        <Link to="/analise-desempenho" className="btn color3">Análise de Desempenho com PDCA</Link>
        <Link to="/ocorrencias-diarias" className="btn color4">Ocorrências Diárias</Link>
        <Link to="/controle-qualidade" className="btn color5">Controle de Qualidade e Inspeção de Mercadorias</Link>
        <Link to="/capacitacao-treinamento" className="btn color1">Capacitação e Treinamento de Funcionários</Link>
        <Link to="/manutencao-preventiva" className="btn color2">Manutenção Preventiva</Link>
        <Link to="/ciclo-pdca" className="btn color3">Ciclo PDCA para Melhoria Contínua</Link>
      </div>
    </div>
  );
};

export default Links;
