import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Table } from 'react-bootstrap';

const CadastroCliente = () => {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    contato: '',
    tipoCliente: '',
    frequenciaEntrega: '',
  });
  const [clientes, setClientes] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? 'PUT' : 'POST';
    const url = editId
      ? `http://localhost:5000/api/cadastro/cliente/${editId}`
      : 'http://localhost:5000/api/cadastro/cliente';
    
    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert(editId ? 'Cliente atualizado!' : 'Cliente cadastrado!');
      fetchClientes();
      setFormData({ nome: '', endereco: '', contato: '', tipoCliente: '', frequenciaEntrega: '' });
      setEditId(null);
    }
  };

  const fetchClientes = async () => {
    const response = await fetch('http://localhost:5000/api/cadastro/cliente');
    const data = await response.json();
    setClientes(data);
  };

  useEffect(() => {
    fetchClientes();
  }, []);

  const handleEdit = (id) => {
    const cliente = clientes.find((item) => item._id === id);
    setFormData(cliente);
    setEditId(id);
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/api/cadastro/cliente/${id}`, { method: 'DELETE' });
    if (response.ok) {
      alert('Cliente excluído!');
      fetchClientes();
    }
  };

  return (
    <Container>
      <Row className="col-md-8 color2 p-4 rounded shadow">
        <h2 className="text-primary text-center">Cadastro de Cliente</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nome do Cliente</Form.Label>
            <Form.Control type="text" name="nome" value={formData.nome} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Endereço</Form.Label>
            <Form.Control type="text" name="endereco" value={formData.endereco} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Contato</Form.Label>
            <Form.Control type="text" name="contato" value={formData.contato} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Tipo de Cliente</Form.Label>
            <Form.Control type="text" name="tipoCliente" value={formData.tipoCliente} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Frequência de Entrega</Form.Label>
            <Form.Control type="text" name="frequenciaEntrega" value={formData.frequenciaEntrega} onChange={handleChange} />
          </Form.Group>

          <Button variant="dark" type="submit">
            {editId ? 'Atualizar' : 'Cadastrar'}
          </Button>
        </Form>

        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Contato</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((item) => (
              <tr key={item._id}>
                <td>{item.nome}</td>
                <td>{item.endereco}</td>
                <td>{item.contato}</td>
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

export default CadastroCliente;
