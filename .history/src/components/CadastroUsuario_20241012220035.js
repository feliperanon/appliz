import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Table } from 'react-bootstrap';

const CadastroUsuario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    perfilAcesso: '',
  });
  const [usuarios, setUsuarios] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? 'PUT' : 'POST';
    const url = editId
      ? `http://localhost:5000/api/cadastro/usuario/${editId}`
      : 'http://localhost:5000/api/cadastro/usuario';
    
    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert(editId ? 'Usuário atualizado!' : 'Usuário cadastrado!');
      fetchUsuarios();
      setFormData({ nome: '', email: '', senha: '', perfilAcesso: '' });
      setEditId(null);
    }
  };

  const fetchUsuarios = async () => {
    const response = await fetch('http://localhost:5000/api/cadastro/usuario');
    const data = await response.json();
    setUsuarios(data);
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const handleEdit = (id) => {
    const usuario = usuarios.find((item) => item._id === id);
    setFormData(usuario);
    setEditId(id);
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/api/cadastro/usuario/${id}`, { method: 'DELETE' });
    if (response.ok) {
      alert('Usuário excluído!');
      fetchUsuarios();
    }
  };

  return (
    <Container>
      <Row className="col-md-8 color2 p-4 rounded shadow">
        <h2 className="text-primary text-center">Cadastro de Usuário</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" name="nome" value={formData.nome} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" name="senha" value={formData.senha} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Perfil de Acesso</Form.Label>
            <Form.Select name="perfilAcesso" value={formData.perfilAcesso} onChange={handleChange}>
              <option value="Admin">Admin</option>
              <option value="Gestor">Gestor</option>
              <option value="Operacional">Operacional</option>
              <option value="Consultor">Consultor</option>
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
              <th>Email</th>
              <th>Perfil</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((item) => (
              <tr key={item._id}>
                <td>{item.nome}</td>
                <td>{item.email}</td>
                <td>{item.perfilAcesso}</td>
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

export default CadastroUsuario;
