import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHome, FaClock, FaChartLine, FaClipboardList, FaCheckCircle, FaChalkboardTeacher, FaTools, FaRecycle } from 'react-icons/fa'; // Importando ícones

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg" className="mb-3">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            Appliz
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" className="d-flex align-items-center">
                  <FaHome className="me-2" /> Tela Principal
                </Nav.Link>
                <Nav.Link as={Link} to="/cadastro" className="d-flex align-items-center">
                  <FaClipboardList className="me-2" /> Cadastro (Central de Dados)
                </Nav.Link>
                <Nav.Link as={Link} to="/medicao-tempo" className="d-flex align-items-center">
                  <FaClock className="me-2" /> Medição de Tempo
                </Nav.Link>
                <Nav.Link as={Link} to="/analise-pdca" className="d-flex align-items-center">
                  <FaChartLine className="me-2" /> Análise de Desempenho com PDCA
                </Nav.Link>
                <Nav.Link as={Link} to="/ocorrencias" className="d-flex align-items-center">
                  <FaClipboardList className="me-2" /> Ocorrências Diárias
                </Nav.Link>
                <Nav.Link as={Link} to="/controle-qualidade" className="d-flex align-items-center">
                  <FaCheckCircle className="me-2" /> Controle de Qualidade
                </Nav.Link>
                <Nav.Link as={Link} to="/capacitacao" className="d-flex align-items-center">
                  <FaChalkboardTeacher className="me-2" /> Capacitação e Treinamento
                </Nav.Link>
                <Nav.Link as={Link} to="/manutencao" className="d-flex align-items-center">
                  <FaTools className="me-2" /> Manutenção Preventiva
                </Nav.Link>
                <Nav.Link as={Link} to="/ciclo-pdca" className="d-flex align-items-center">
                  <FaRecycle className="me-2" /> Ciclo PDCA para Melhoria Contínua
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
