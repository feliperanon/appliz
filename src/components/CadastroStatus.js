import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const CadastroStatus = () => {
  const [formData, setFormData] = useState({
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui vai a lógica de envio ao backend
    console.log(formData);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <h3 className="text-center mb-4">Cadastro de Status</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                name="status"
                value={formData.status}
                onChange={handleChange}
                placeholder="Digite o status"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Cadastrar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CadastroStatus;
