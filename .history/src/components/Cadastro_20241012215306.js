import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Usando o React Router para navegação

const Cadastro = () => {
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row>
        <Col className="text-center">
          <h2 className="mb-4">Escolha uma opção de cadastro</h2>

          <Link to="/cadastro/colaborador">
            <Button variant="primary" className="mb-3 w-100">Cadastro de Colaborador</Button>
          </Link>

          <Link to="/cadastro/cliente">
            <Button variant="secondary" className="mb-3 w-100">Cadastro de Cliente</Button>
          </Link>

          <Link to="/cadastro/equipamento">
            <Button variant="success" className="mb-3 w-100">Cadastro de Equipamento</Button>
          </Link>

          <Link to="/cadastro/status">
            <Button variant="info" className="mb-3 w-100">Cadastro de Status</Button>
          </Link>

          <Link to="/cadastro/usuario">
            <Button variant="dark" className="w-100">Cadastro de Usuário</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Cadastro;
