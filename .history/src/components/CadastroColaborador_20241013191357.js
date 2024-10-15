import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
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

  const funcoes = [
    'ANALISTA ADMINISTRATIVO',
    'ANALISTA COMERCIAL',
    'ASSISTENTE OPERACIONAL DE LOGÍSTICA',
    'AUXILIAR ADMINISTRATIVO',
    'AUXILIAR DE FATURAMENTO',
    'AUXILIAR SERVIÇOS GERAIS',
    'CAIXA',
    'CARREGADOR',
    'CONFERENTE',
    'ENTREGADOR',
    'ESTOQUISTA',
    'MOTORISTA',
    'OPERADOR DE EMPILHADEIRA',
    'VENDEDOR',
    'AUXILIAR DE LOGÍSTICA',
    'SUPERVISOR DE VENDAS',
    'ANALISTA OPERACIONAL DE ESTOQUE',
    'AUXILIAR COMERCIAL',
    'REPOSITOR'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fetchColaboradores = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/colaboradores');
      // Ordena os colaboradores por nome em ordem alfabética
      const sortedColaboradores = response.data.sort((a, b) => a.nome.localeCompare(b.nome));
      setColaboradores(sortedColaboradores);
    } catch (error) {
      console.error('Erro ao buscar colaboradores:', error);
    }
  };

  useEffect(() => {
    fetchColaboradores();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nome || !formData.funcao || !formData.telefone || !formData.status) {
      console.error('Preencha todos os campos obrigatórios');
      return;
    }

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/colaboradores/${editId}`, formData);
        setEditId(null);
      } else {
        await axios.post('http://localhost:5000/api/colaboradores', formData);
      }
      fetchColaboradores();
      setFormData({ nome: '', funcao: '', telefone: '', status: '' });
    } catch (error) {
      console.error('Erro ao cadastrar ou atualizar colaborador:', error);
    }
  };

  const handleEdit = (colaborador) => {
    setFormData({
      nome: colaborador.nome,
      funcao: colaborador.funcao,
      telefone: colaborador.telefone,
      status: colaborador.status
    });
    setEditId(colaborador._id);
  };

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

            <Button className="custom-btn w-100" type="submit">
              {editId ? 'Atualizar' : 'Cadastrar'}
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={12}>
          <h4 className="text-center">Lista de Colaboradores</h4>
          <div>
            {colaboradores.map((colaborador) => (
              <Card className="mb-3" key={colaborador._id}>
                <Card.Body>
                  <Row>
                    <Col md={10}>
                      <p><strong>Nome:</strong> {colaborador.nome} - <strong>Status:</strong> {colaborador.status}</p>
                      <p><strong>Função:</strong> {colaborador.funcao} - <strong>Telefone:</strong> {colaborador.telefone}</p>
                    </Col>
                    <Col md={2} className="d-flex align-items-center justify-content-end">
                      <Button className="custom-btn-edit btn-sm me-2" onClick={() => handleEdit(colaborador)}>
                        Editar
                      </Button>
                      <Button className="custom-btn-delete btn-sm" onClick={() => handleDelete(colaborador._id)}>
                        Excluir
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CadastroColaborador;
