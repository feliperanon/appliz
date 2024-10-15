import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Table } from 'react-bootstrap';

const CadastroEquipamento = () => {
  const [formData, setFormData] = useState({
    nome: '',
    numeroFrota: '',
    marca: '',
    tipoEquipamento: '',
    km: '',
    horimetro: '',
    statusOperacional: '',
  });
  const [equipamentos, setEquipamentos] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = editId ? 'PUT' : 'POST';
    const url = editId
      ? `http://localhost:5000/api/cadastro/equipamento/${editId}`
      : 'http://localhost:5000/api/cadastro/equipamento';
    
    const response = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert(editId ? 'Equipamento atualizado!' : 'Equipamento cadastrado!');
      fetchEquipamentos();
      setFormData({ nome: '', numeroFrota: '', marca: '', tipoEquipamento: '', km: '', horimetro: '', statusOperacional: '' });
      setEditId(null);
    }
  };

  const fetchEquipamentos = async () => {
    const response = await fetch('http://localhost:5000/api/cadastro/equipamento');
    const data = await response.json();
    setEquipamentos(data);
  };

  useEffect(() => {
    fetchEquipamentos();
  }, []);

  const handleEdit = (id) => {
    const equipamento = equipamentos.find((item) => item._id === id);
    setFormData(equipamento);
    setEditId(id);
  };

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/api/cadastro/equipamento/${id}`, { method: 'DELETE' });
    if (response.ok) {
      alert('Equipamento excluído!');
      fetchEquipamentos();
    }
  };

  return (
    <Container>
      <Row className="col-md-8 color2 p-4 rounded shadow">
        <h2 className="text-primary text-center">Cadastro de Equipamento</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nome do Equipamento</Form.Label>
            <Form.Control type="text" name="nome" value={formData.nome} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Número da Frota</Form.Label>
            <Form.Control type="text" name="numeroFrota" value={formData.numeroFrota} onChange={handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Marca</Form.Label>
            <Form.Control type="text" name="marca" value={formData.marca} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Tipo de Equipamento</Form.Label>
            <Form.Control type="text" name="tipoEquipamento" value={formData.tipoEquipamento} onChange={handleChange} required />
          </Form.Group>

          <Form.Group>
            <Form.Label>KM</Form.Label>
            <Form.Control type="number" name="km" value={formData.km} onChange={handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Horímetro</Form.Label>
            <Form.Control type="number" name="horimetro" value={formData.horimetro} onChange={handleChange} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Status Operacional</Form.Label>
            <Form.Control type="text" name="statusOperacional" value={formData.statusOperacional} onChange={handleChange} required />
          </Form.Group>

          <Button variant="dark" type="submit">
            {editId ? 'Atualizar' : 'Cadastrar'}
          </Button>
        </Form>

        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Marca</th>
              <th>Tipo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {equipamentos.map((item) => (
              <tr key={item._id}>
                <td>{item.nome}</td>
                <td>{item.marca}</td>
                <td>{item.tipoEquipamento}</td>
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

export default CadastroEquipamento;
