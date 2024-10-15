import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Table } from 'react-bootstrap';

const CadastroStatus = () => {
  const [formData, setFormData] = useState({
    nomeColaborador: '',
    statusAtual: '',
    observacoes: '',
  });
  const [statusList, setStatusList] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? 'PUT' : 'POST';
    const url = editId
      ? `http://localhost:5000/api/cadastro/status/${editId}`
      : 'http://localhost:5000/api/cadastro/status';
    
    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert(editId ? 'Status atualizado!' : 'Status cadastrado!');
      fetchStatus();
      setFormData({ nomeColaborador: '', statusAtual: '', observacoes: '' });
      setEditId(null);
    }
  };

  const fetchStatus = async () => {
    const response = await fetch('http://localhost:5000/api/cadastro/status');
    const data = await response.json();
    setStatusList(data);
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  const handleEdit = (id) => {
    const status = statusList.find((item) => item._id === id);
    setFormData(status);
    setEditId(id);
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/api/cadastro/status/${id}`, { method: 'DELETE' });
    if (response.ok) {
      alert('Status excluído!');
      fetchStatus();
    }
  };

  return (
    <Container>
      <Row className="col-md-8 color2 p-4 rounded shadow">
        <h2 className="text-primary text-center">Cadastro de Status</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nome do Colaborador</Form.Label>
            <Form.Control type="text" name="nomeColaborador" value={formData.nomeColaborador} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Status Atual</Form.Label>
            <Form.Control type="text" name="statusAtual" value={formData.statusAtual} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Observações</Form.Label>
            <Form.Control type="text" name="observacoes" value={formData.observacoes} onChange={handleChange} />
          </Form.Group>

          <Button variant="dark" type="submit">
            {editId ? 'Atualizar' : 'Cadastrar'}
          </Button>
        </Form>

        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Colaborador</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {statusList.map((item) => (
              <tr key={item._id}>
                <td>{item.nomeColaborador}</td>
                <td>{item.statusAtual}</td>
                <td>
                  <Button variant="warning" onClick={() => handleEdit(item._id)}>
                    Editar
                  </Button>{' '}
                  <Button variant="danger" onClick={() => handleDelete(item._id)}>
                    Excluir
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default CadastroStatus;
