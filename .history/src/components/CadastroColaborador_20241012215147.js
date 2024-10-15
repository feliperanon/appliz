import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Table } from 'react-bootstrap';

const CadastroColaborador = () => {
  const [formData, setFormData] = useState({
    nome: '',
    funcao: '',
    telefone: '',
    email: '',
    status: 'Ativo',
  });
  const [colaboradores, setColaboradores] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? 'PUT' : 'POST';
    const url = editId
      ? `http://localhost:5000/api/cadastro/colaborador/${editId}`
      : 'http://localhost:5000/api/cadastro/colaborador';
    
    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert(editId ? 'Colaborador atualizado!' : 'Colaborador cadastrado!');
      fetchColaboradores();
      setFormData({ nome: '', funcao: '', telefone: '', email: '', status: 'Ativo' });
      setEditId(null);
    }
  };

  const fetchColaboradores = async () => {
    const response = await fetch('http://localhost:5000/api/cadastro/colaborador');
    const data = await response.json();
    setColaboradores(data);
  };

  useEffect(() => {
    fetchColaboradores();
  }, []);

  const handleEdit = (id) => {
    const colaborador = colaboradores.find((item) => item._id === id);
    setFormData(colaborador);
    setEditId(id);
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/api/cadastro/colaborador/${id}`, { method: 'DELETE' });
    if (response.ok) {
      alert('Colaborador excluído!');
      fetchColaboradores();
    }
  };

  return (
    <Container>
      <Row className="col-md-8 color2 p-4 rounded shadow">
        <h2 className="text-primary text-center">Cadastro de Colaborador</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control type="text" name="nome" value={formData.nome} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Função</Form.Label>
            <Form.Control type="text" name="funcao" value={formData.funcao} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="text" name="telefone" value={formData.telefone} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Select name="status" value={formData.status} onChange={handleChange}>
              <option value="Ativo">Ativo</option>
              <option value="Férias">Férias</option>
              <option value="Desligado">Desligado</option>
            </Form.Select>
          </Form.Group>

          <Button variant="dark" type="submit">
            {editId ? 'Atualizar' : 'Cadastrar'}
          </Button>
        </Form>

        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Função</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {colaboradores.map((item) => (
              <tr key={item._id}>
                <td>{item.nome}</td>
                <td>{item.funcao}</td>
                <td>{item.email}</td>
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

export default CadastroColaborador;
