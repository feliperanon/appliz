import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';
import axios from 'axios'; // Para requisições HTTP

const CadastroColaborador = () => {
  const [formData, setFormData] = useState({
    nome: '',
    funcao: '',
    status: ''
  });
  const [colaboradores, setColaboradores] = useState([]);
  const [editId, setEditId] = useState(null); // Para edição

  // Função para capturar os valores dos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para buscar os colaboradores ao carregar a página
  const fetchColaboradores = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/colaboradores');
      setColaboradores(response.data);
    } catch (error) {
      console.error('Erro ao buscar colaboradores:', error);
    }
  };

  useEffect(() => {
    fetchColaboradores(); // Chama a função ao carregar o componente
  }, []);

  // Função para cadastrar ou atualizar colaborador
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/colaboradores/${editId}`, formData);
        setEditId(null);
      } else {
        await axios.post('http://localhost:5000/api/colaboradores', formData);
      }
      fetchColaboradores();
      setFormData({ nome: '', funcao: '', status: '' });
    } catch (error) {
      console.error('Erro ao cadastrar ou atualizar colaborador:', error);
    }
  };

  // Função para preencher os campos com os dados do colaborador a ser editado
  const handleEdit = (colaborador) => {
    setFormData({ nome: colaborador.nome, funcao: colaborador.funcao, status: colaborador.status });
    setEditId(colaborador._id);
  };

  // Função para excluir colaborador
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/colaboradores/${id}`);
      fetchColaboradores();
    } catch (error) {
      console.error('Erro ao excluir colaborador:', error);
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <h3 className="text-center mb-4">Cadastro de Colaborador</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Digite o nome completo"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Função</Form.Label>
              <Form.Control
                type="text"
                name="funcao"
                value={formData.funcao}
                onChange={handleChange}
                placeholder="Digite a função"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="">Selecione o status</option>
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              {editId ? 'Atualizar' : 'Cadastrar'}
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={8} className="mx-auto">
          <h4 className="text-center">Lista de Colaboradores</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Função</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {colaboradores.map((colaborador) => (
                <tr key={colaborador._id}>
                  <td>{colaborador.nome}</td>
                  <td>{colaborador.funcao}</td>
                  <td>{colaborador.status}</td>
                  <td>
                    <Button variant="warning" onClick={() => handleEdit(colaborador)}>Editar</Button>{' '}
                    <Button variant="danger" onClick={() => handleDelete(colaborador._id)}>Excluir</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default CadastroColaborador;