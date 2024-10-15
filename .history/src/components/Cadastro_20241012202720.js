import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';

const Cadastro = () => {
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    nome: '',
    funcao: '',
    telefone: '',
    endereco: '',
    numeroFrota: '',
    marca: '',
    tipoEquipamento: '',
    km: '',
    horimetro: '',
    statusOperacional: '',
    latitude: '',
    longitude: '',
    email: '',
    senha: '',
  });
  const [cadastros, setCadastros] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchCadastros = async () => {
    if (!userType) return;
    try {
      const response = await fetch(`http://localhost:5000/api/cadastro/${userType}`);
      const data = await response.json();
      setCadastros(data);
    } catch (error) {
      console.error('Erro ao buscar cadastros:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = editId
      ? `http://localhost:5000/api/cadastro/${userType}/${editId}`
      : `http://localhost:5000/api/cadastro/${userType}`;

    try {
      const method = editId ? 'PUT' : 'POST';
      const response = await fetch(apiUrl, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(editId ? 'Cadastro atualizado com sucesso!' : 'Cadastro realizado com sucesso!');
        setFormData({});
        setEditId(null);
        fetchCadastros();
      } else {
        alert('Erro ao realizar o cadastro');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      alert('Erro ao realizar o cadastro');
    }
  };

  const handleEdit = (id) => {
    const cadastro = cadastros.find((item) => item._id === id);
    setFormData(cadastro);
    setEditId(id);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cadastro/${userType}/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Cadastro excluído com sucesso!');
        fetchCadastros();
      } else {
        alert('Erro ao excluir o cadastro');
      }
    } catch (error) {
      console.error('Erro ao excluir cadastro:', error);
      alert('Erro ao excluir cadastro');
    }
  };

  useEffect(() => {
    fetchCadastros();
  }, [userType]);

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row className="col-md-8 color2 p-4 rounded shadow">
        <h2 className="text-primary text-center">Cadastro (Central de Dados)</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Tipo de Cadastro</Form.Label>
            <Form.Select value={userType} onChange={(e) => setUserType(e.target.value)}>
              <option value="">Selecione</option>
              <option value="colaborador">Colaborador</option>
              <option value="cliente">Cliente</option>
              <option value="equipamento">Equipamento</option>
              <option value="status">Status</option>
              <option value="usuario">Usuário (Acesso ao Sistema)</option>
            </Form.Select>
          </Form.Group>

          {/* Formulários Condicionais Aqui */}

          <Button variant="dark" type="submit" className="w-100">
            {editId ? 'Atualizar' : 'Salvar'}
          </Button>
        </Form>

        {/* Tabela de cadastros */}
        {cadastros.length > 0 && (
          <Table striped bordered hover className="mt-4">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {cadastros.map((item) => (
                <tr key={item._id}>
                  <td>{item.nome}</td>
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
        )}
      </Row>
    </Container>
  );
};

export default Cadastro;
