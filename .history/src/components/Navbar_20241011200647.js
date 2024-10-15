import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="success" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Tela Principal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/cadastro">Cadastro (Central de Dados)</Nav.Link>
            <Nav.Link as={Link} to="/medicao-tempo">Medição de Tempo</Nav.Link>
            <Nav.Link as={Link} to="/analise-pdca">Análise de Desempenho com PDCA</Nav.Link>
            <Nav.Link as={Link} to="/ocorrencias">Ocorrências Diárias</Nav.Link>
            <Nav.Link as={Link} to="/controle-qualidade">Controle de Qualidade e Inspeção de Mercadorias</Nav.Link>
            <Nav.Link as={Link} to="/capacitacao">Capacitação e Treinamento de Funcionários</Nav.Link>
            <Nav.Link as={Link} to="/manutencao">Manutenção Preventiva</Nav.Link>
            <Nav.Link as={Link} to="/ciclo-pdca">Ciclo PDCA para Melhoria Contínua</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
