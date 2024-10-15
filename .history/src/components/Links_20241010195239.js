import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div>
      <h2>Bem-vindo! Escolha um tópico:</h2>
      <ul>
        <li><Link to="/cadastro">Cadastro (Central de Dados)</Link></li>
        <li><Link to="/medicao-tempo">Medição de Tempo</Link></li>
        <li><Link to="/analise-desempenho">Análise de Desempenho com PDCA</Link></li>
        <li><Link to="/ocorrencias-diarias">Ocorrências Diárias</Link></li>
        <li><Link to="/controle-qualidade">Controle de Qualidade e Inspeção de Mercadorias</Link></li>
        <li><Link to="/capacitacao-treinamento">Capacitação e Treinamento de Funcionários</Link></li>
        <li><Link to="/manutencao-preventiva">Manutenção Preventiva</Link></li>
        <li><Link to="/ciclo-pdca">Ciclo PDCA para Melhoria Contínua</Link></li>
      </ul>
    </div>
  );
};

export default Links;
