import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simular autenticação (em um cenário real, você faria uma chamada para a API aqui)
    if (email === 'admin@admin.com' && password === 'admin') {
      onLogin(); // Função passada por props para mudar o estado para autenticado
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Form onSubmit={handleSubmit} className="w-50">
        <h2 className="mb-4 text-center">Login</h2>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Entrar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
