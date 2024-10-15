import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: '',
    funcao: '',
    telefone: '',
    endereco: '',
    numeroFrota: '',
    marca: '',
    tipoEquipamento: '',
    kmHorimetro: '',
    status: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados cadastrados:', formData);
    // Conectar ao backend para envio de dados
  };

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row>
        <Col md={6} className="p-4 rounded shadow">
          <h2 className="text-primary text-center">Cadastro (Central de Dados)</h2>
          <Form onSubmit={handleSubmit}>

            {/* Cadastro de Colaboradores */}
            <Form.Group className="mb-3">
              <Form.Label>Nome do Colaborador</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Função</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite a função"
                name="funcao"
                value={formData.funcao}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Digite o telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Cadastro de Clientes com integração ao Google Maps */}
            <Form.Group className="mb-3">
              <Form.Label>Nome do Cliente</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome do cliente"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Endereço</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o endereço ou utilize o Google Maps"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
              />
              {/* Integração Google Maps aqui */}
            </Form.Group>

            {/* Cadastro de Equipamentos */}
            <Form.Group className="mb-3">
              <Form.Label>Nome do Equipamento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o nome do equipamento"
                name="nomeEquipamento"
                value={formData.nomeEquipamento}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Número da Frota</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o número da frota"
                name="numeroFrota"
                value={formData.numeroFrota}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite a marca do equipamento"
                name="marca"
                value={formData.marca}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tipo de Equipamento</Form.Label>
              <Form.Control
                as="select"
                name="tipoEquipamento"
                value={formData.tipoEquipamento}
                onChange={handleChange}
              >
                <option value="Caminhão">Caminhão</option>
                <option value="Paleteira">Paleteira</option>
                <option value="Empilhadeira">Empilhadeira</option>
                <option value="Carrinhos">Carrinhos</option>
                <option value="Docas">Docas</option>
                <option value="Paleteira Elétrica">Paleteira Elétrica</option>
                <option value="Empilhadeira Patolada">Empilhadeira Patolada</option>
              </Form.Control>
            </Form.Group>

            {/* Cadastro de Status */}
            <Form.Group className="mb-3">
              <Form.Label>Status Operacional</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite o status (ex: Entrega, Almoço, etc)"
                name="status"
                value={formData.status}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100">Salvar</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Cadastro;
