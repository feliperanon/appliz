import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login enviado:', formData);
    // Aqui você conectaria ao backend para validar o login
  };

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row className="col-md-6 p-4 rounded shadow">
        <h2 className="text-primary text-center">Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              name="senha"
              placeholder="Digite sua senha"
              value={formData.senha}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="dark" type="submit" className="w-100">Entrar</Button>
        </Form>
      </Row>
    </Container>
  );
};

export default Login;
