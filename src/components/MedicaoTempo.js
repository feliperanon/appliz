import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const MedicaoTempo = () => {
  const [formData, setFormData] = useState({
    entregador: '',
    clientes: [],
    status: [],
    equipamento: '',
    tempoEstimado: '',
    horarioSaida: '',
    horarioRetorno: '',
    volume: '',
  });
  const [rotinasAtivas, setRotinasAtivas] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClienteStatusChange = (e, field) => {
    const { options } = e.target;
    const values = Array.from(options).filter(option => option.selected).map(option => option.value);
    setFormData({ ...formData, [field]: values });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar se o entregador já está em uma rotina ativa
    if (rotinasAtivas.includes(formData.entregador)) {
      alert('O entregador já está em uma rotina ativa!');
      return;
    }

    const tempoGasto = calculateTime(formData.horarioSaida, formData.horarioRetorno);
    alert(`Tempo gasto: ${tempoGasto}`);

    // Adicionar o entregador à lista de rotinas ativas
    setRotinasAtivas([...rotinasAtivas, formData.entregador]);

    // Limpar o formulário ou enviar para o backend
  };

  const calculateTime = (start, end) => {
    const [startH, startM] = start.split(':').map(Number);
    const [endH, endM] = end.split(':').map(Number);
    const startTime = new Date(0, 0, 0, startH, startM, 0);
    const endTime = new Date(0, 0, 0, endH, endM, 0);
    const diff = endTime - startTime;

    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);

    return `${hours}h ${minutes}m`;
  };

  return (
    <Container className="p-4">
      <h2 className="text-center">Medição de Tempo de Entrega</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Entregador</Form.Label>
              <Form.Control
                type="text"
                name="entregador"
                value={formData.entregador}
                onChange={handleChange}
                placeholder="Nome do Entregador"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Equipamento</Form.Label>
              <Form.Control
                type="text"
                name="equipamento"
                value={formData.equipamento}
                onChange={handleChange}
                placeholder="Nome do Equipamento"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Clientes</Form.Label>
              <Form.Control
                as="select"
                name="clientes"
                multiple
                value={formData.clientes}
                onChange={(e) => handleClienteStatusChange(e, 'clientes')}
              >
                <option value="Supermercado Celeste Azul">Supermercado Celeste Azul</option>
                <option value="Sacolão Abastecer">Sacolão Abastecer</option>
                <option value="ABC Laguna">ABC Laguna</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                multiple
                value={formData.status}
                onChange={(e) => handleClienteStatusChange(e, 'status')}
              >
                <option value="Entrega">Entrega</option>
                <option value="Distribuição">Distribuição</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Tempo Estimado</Form.Label>
              <Form.Control
                type="text"
                name="tempoEstimado"
                value={formData.tempoEstimado}
                onChange={handleChange}
                placeholder="00:30"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Volume Entregue</Form.Label>
              <Form.Control
                type="text"
                name="volume"
                value={formData.volume}
                onChange={handleChange}
                placeholder="Volume (ex: 30 caixas)"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Horário de Saída</Form.Label>
              <Form.Control
                type="time"
                name="horarioSaida"
                value={formData.horarioSaida}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Horário de Retorno</Form.Label>
              <Form.Control
                type="time"
                name="horarioRetorno"
                value={formData.horarioRetorno}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="w-100">
          Registrar
        </Button>
      </Form>
    </Container>
  );
};

export default MedicaoTempo;
