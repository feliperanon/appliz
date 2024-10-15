import React from 'react'; 
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Usando Link para navegação

const Cadastro = () => {
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row className="w-100">
        <Col xs={12} md={8} lg={6} className="mx-auto text-center">
          <h2 className="mb-4 fw-bold">Escolha uma opção de cadastro</h2>

          <Link to="/cadastro/colaborador">
            <Button 
              variant="primary" 
              className="mb-3 w-100 py-3" 
              aria-label="Cadastro de Colaborador"
            >
              Cadastro de Colaborador
            </Button>
          </Link>

          <Link to="/cadastro/cliente">
            <Button 
              variant="secondary" 
              className="mb-3 w-100 py-3" 
              aria-label="Cadastro de Cliente"
            >
              Cadastro de Cliente
            </Button>
          </Link>

          <Link to="/cadastro/equipamento">
            <Button 
              variant="success" 
              className="mb-3 w-100 py-3" 
              aria-label="Cadastro de Equipamento"
            >
              Cadastro de Equipamento
            </Button>
          </Link>

          <Link to="/cadastro/status">
            <Button 
              variant="info" 
              className="mb-3 w-100 py-3" 
              aria-label="Cadastro de Status"
            >
              Cadastro de Status
            </Button>
          </Link>

          <Link to="/cadastro/usuario">
            <Button 
              variant="dark" 
              className="w-100 py-3" 
              aria-label="Cadastro de Usuário"
            >
              Cadastro de Usuário
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Cadastro;
