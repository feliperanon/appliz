import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';

const Cadastro = () => {
  const [userType, setUserType] = useState(''); // Tipo de cadastro selecionado
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
    senha: '', // Usado para o cadastro de usuários
  });
  const [cadastros, setCadastros] = useState([]); // Armazena os cadastros listados
  const [editId, setEditId] = useState(null); // Armazena o ID do cadastro em edição

  // Atualizar os campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para buscar cadastros do backend
  const fetchCadastros = async () => {
    if (!userType) return; // Verifica se um tipo de cadastro foi selecionado

    try {
      const response = await fetch(`http://localhost:5000/api/cadastro/${userType}`);
      const data = await response.json();
      setCadastros(data); // Armazena os cadastros listados
    } catch (error) {
      console.error('Erro ao buscar cadastros:', error);
    }
  };

  // Função para enviar os dados ao backend (criar ou atualizar)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = editId
      ? `http://localhost:5000/api/cadastro/${userType}/${editId}` // URL para editar
      : `http://localhost:5000/api/cadastro/${userType}`; // URL para criar novo

    try {
      const method = editId ? 'PUT' : 'POST'; // Define o método HTTP para criar ou editar
      const response = await fetch(apiUrl, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(editId ? 'Cadastro atualizado com sucesso!' : 'Cadastro realizado com sucesso!');
        setFormData({
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
        }); // Limpar o formulário
        setEditId(null); // Resetar ID de edição
        fetchCadastros(); // Atualiza a listagem de cadastros
      } else {
        alert('Erro ao realizar o cadastro');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      alert('Erro ao realizar o cadastro');
    }
  };

  // Função para verificar se o km e horímetro devem ser obrigatórios
  const isKmAndHorimetroRequired = () => {
    const excludedTypes = ['Paleteira', 'Docas', 'Carrinhos', 'Paleteira Elétrica'];
    return !excludedTypes.includes(formData.tipoEquipamento);
  };

  // Função para editar um cadastro
  const handleEdit = (id) => {
    const cadastro = cadastros.find((item) => item._id === id);
    setFormData(cadastro); // Preenche o formulário com os dados para edição
    setEditId(id); // Define o ID de edição
  };

  // Função para excluir um cadastro
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cadastro/${userType}/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Cadastro excluído com sucesso!');
        fetchCadastros(); // Atualiza a listagem de cadastros
      } else {
        alert('Erro ao excluir o cadastro');
      }
    } catch (error) {
      console.error('Erro ao excluir cadastro:', error);
      alert('Erro ao excluir cadastro');
    }
  };

  // Buscar cadastros sempre que o tipo de cadastro for alterado
  useEffect(() => {
    fetchCadastros(); // Chama a função para buscar cadastros ao mudar o tipo
  }, [userType]);

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row className="col-md-8 color2 p-4 rounded shadow">
        <h2 className="text-primary text-center">Cadastro (Central de Dados)</h2>

        <Form onSubmit={handleSubmit}>
          {/* Seletor do tipo de cadastro */}
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

          {/* Formulário para equipamentos */}
          {userType === 'equipamento' && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Nome do Equipamento</Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  placeholder="Digite o nome do equipamento"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Número da Frota</Form.Label>
                <Form.Control
                  type="text"
                  name="numeroFrota"
                  placeholder="Digite o número da frota"
                  value={formData.numeroFrota}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Marca</Form.Label>
                <Form.Control
                  type="text"
                  name="marca"
                  placeholder="Digite a marca do equipamento"
                  value={formData.marca}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Tipo de Equipamento</Form.Label>
                <Form.Select name="tipoEquipamento" value={formData.tipoEquipamento} onChange={handleChange}>
                  <option value="">Selecione</option>
                  <option value="Caminhão">Caminhão</option>
                  <option value="Paleteira">Paleteira</option>
                  <option value="Empilhadeira">Empilhadeira</option>
                  <option value="Carrinhos">Carrinhos</option>
                  <option value="Docas">Docas</option>
                  <option value="Paleteira Elétrica">Paleteira Elétrica</option>
                  <option value="Empilhadeira Patolada">Empilhadeira Patolada</option>
                </Form.Select>
              </Form.Group>
              {isKmAndHorimetroRequired() && (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>KM</Form.Label>
                    <Form.Control
                      type="text"
                      name="km"
                      placeholder="Digite a quilometragem"
                      value={formData.km}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Horímetro</Form.Label>
                    <Form.Control
                      type="text"
                      name="horimetro"
                      placeholder="Digite o horímetro"
                      value={formData.horimetro}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </>
              )}
              <Form.Group className="mb-3">
                <Form.Label>Status Operacional</Form.Label>
                <Form.Control
                  type="text"
                  name="statusOperacional"
                  placeholder="Digite o status operacional"
                  value={formData.statusOperacional}
                  onChange={handleChange}
                />
              </Form.Group>
            </>
          )}

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
