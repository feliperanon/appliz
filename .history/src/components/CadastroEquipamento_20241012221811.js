import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const CadastroEquipamento = () => {
  const [formData, setFormData] = useState({
    nome: '',
    tipoEquipamento: '',
    numeroFrota: '',
    marca: '',
    km: '',
    horimetro: ''
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

  const showKmHorimetroFields = () => {
    return ['Empilhadeira', 'Caminhão', 'Carro'].includes(formData.tipoEquipamento);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <h3 className="text-center mb-4">Cadastro de Equipamento</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome do Equipamento</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Digite o nome ou código do equipamento"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tipo de Equipamento</Form.Label>
              <Form.Control
                as="select"
                name="tipoEquipamento"
                value={formData.tipoEquipamento}
                onChange={handleChange}
                required
              >
                <option value="">Selecione o tipo</option>
                <option value="Empilhadeira">Empilhadeira</option>
                <option value="Caminhão">Caminhão</option>
                <option value="Carro">Carro</option>
                <option value="Paleteira">Paleteira</option>
                <option value="Doca">Doca</option>
                <option value="Carrinho de Madeira">Carrinho de Madeira</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Número de Frota</Form.Label>
              <Form.Control
                type="text"
                name="numeroFrota"
                value={formData.numeroFrota}
                onChange={handleChange}
                placeholder="Digite o número da frota"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Marca</Form.Label>
              <Form.Control
                type="text"
                name="marca"
                value={formData.marca}
                onChange={handleChange}
                placeholder="Digite a marca do equipamento"
                required
              />
            </Form.Group>

            {showKmHorimetroFields() && (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>KM</Form.Label>
                  <Form.Control
                    type="number"
                    name="km"
                    value={formData.km}
                    onChange={handleChange}
                    placeholder="Digite a quilometragem"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Horímetro</Form.Label>
                  <Form.Control
                    type="number"
                    name="horimetro"
                    value={formData.horimetro}
                    onChange={handleChange}
                    placeholder="Digite o horímetro"
                  />
                </Form.Group>
              </>
            )}

            <Button variant="primary" type="submit" className="w-100">
              Cadastrar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CadastroEquipamento;
