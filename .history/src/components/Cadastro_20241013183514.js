import React from 'react'; 
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 

const Cadastro = () => {
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto text-center">
          <h2 className="mb-4">Escolha uma opção de cadastro</h2>

          <Link to="/cadastro/colaborador">
            <Button style={{ backgroundColor: '#282832', border: 'none' }} className="mb-3 w-100 shadow-sm">
              Cadastro de Colaborador
            </Button>
          </Link>

          <Link to="/cadastro/cliente">
            <Button style={{ backgroundColor: '#282832', border: 'none' }} className="mb-3 w-100 shadow-sm">
              Cadastro de Cliente
            </Button>
          </Link>

          <Link to="/cadastro/equipamento">
            <Button style={{ backgroundColor: '#282832', border: 'none' }} className="mb-3 w-100 shadow-sm">
              Cadastro de Equipamento
            </Button>
          </Link>

          <Link to="/cadastro/status">
            <Button style={{ backgroundColor: '#282832', border: 'none' }} className="mb-3 w-100 shadow-sm">
              Cadastro de Status
            </Button>
          </Link>

          <Link to="/cadastro/usuario">
            <Button style={{ backgroundColor: '#282832', border: 'none' }} className="w-100 shadow-sm">
              Cadastro de Usuário
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Cadastro;
