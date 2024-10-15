import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';
import axios from 'axios';

const CadastroColaborador = () => {
  const [formData, setFormData] = useState({
    nome: '',
    funcao: '',
    telefone: '',
    status: ''
  });
  const [colaboradores, setColaboradores] = useState([]);
  const [editId, setEditId] = useState(null);

  // Lista de funções predefinidas
  const funcoes = [
    'Analista Administrativo', 
    'Analista Comercial', 
    'Assistente Operacional de Logística', 
    'Auxiliar Administrativo', 
    'Auxiliar de Faturamento', 
    'Auxiliar de Serviços Gerais', 
    'Caixa', 
    'Carregador', 
    'Conferente', 
    'Entregador', 
    'Estoquista', 
    'Motorista', 
    'Operador de Empilhadeira', 
    'Vendedor', 
    'Auxiliar de Logística', 
    'Supervisor de Vendas', 
    'Analista Operacional de Estoque', 
    'Auxiliar Comercial', 
    'Repositor'
  ];

  // Atualiza o estado do formulário com o que o usuário está digitando
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para buscar os colaboradores do backend
  const fetchColaboradores = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/colaboradores');
      setColaboradores(response.data);
    } catch (error) {
      console.error('Erro ao buscar colaboradores:', error);
    }
  };

  // Chama a função para buscar colaboradores assim que o componente carrega
  useEffect(() => {
    fetchColaboradores();
  }, []);

  // Método para cadastrar ou atualizar colaborador
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Verifica se todos os campos obrigatórios estão preenchidos
    if (!formData.nome || !formData.funcao || !formData.telefone || !formData.status) {
      console.error('Preencha todos os campos');
      return;
    }

    try {
      if (editId) {
        // Atualizando colaborador
        await axios.put(`http://localhost:5000/api/colaboradores/${editId}`, formData);
        setEditId(null);
      } else {
        // Criando novo colaborador
        await axios.post('http://localhost:5000/api/colaboradores', formData);
      }
      fetchColaboradores(); // Recarrega a lista de colaboradores
      setFormData({ nome: '', funcao: '', telefone: '', status: '' }); // Reseta o formulário
    } catch (error) {
      console.error('Erro ao cadastrar ou atualizar colaborador:', error);
    }
  };

  // Função para iniciar a edição de um colaborador
  const handleEdit = (colaborador) => {
    setFormData({
      nome: colaborador.nome,
      funcao: colaborador.funcao,
      telefone: colaborador.telefone,
      status: colaborador.status
    });
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
                as="select"
                name="funcao"
                value={formData.funcao}
                onChange={handleChange}
                required
              >
                <option value="">Selecione a função</option>
                {funcoes.map((funcao, index) => (
                  <option key={index} value={funcao}>
                    {funcao}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="Digite o telefone"
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
                <th>Telefone</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {colaboradores.map((colaborador) => (
                <tr key={colaborador._id}>
                  <td>{colaborador.nome}</td>
                  <td>{colaborador.funcao}</td>
                  <td>{colaborador.telefone}</td>
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
