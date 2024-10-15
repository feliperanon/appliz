import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

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
  });

  // Função para atualizar os dados do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    // Conecte ao backend aqui
  };

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row className="col-md-6 color2 p-4 rounded shadow">
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
            </Form.Select>
          </Form.Group>

          {/* Formulário para Colaboradores */}
          {userType === 'colaborador' && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  placeholder="Digite o nome"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Função</Form.Label>
                <Form.Control
                  type="text"
                  name="funcao"
                  placeholder="Digite a função"
                  value={formData.funcao}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Telefone</Form.Label>
                <Form.Control
                  type="tel"
                  name="telefone"
                  placeholder="Digite o telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                />
              </Form.Group>
            </>
          )}

          {/* Formulário para Clientes */}
          {userType === 'cliente' && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  placeholder="Digite o nome"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Endereço</Form.Label>
                <Form.Control
                  type="text"
                  name="endereco"
                  placeholder="Digite o endereço ou use o Google Maps"
                  value={formData.endereco}
                  onChange={handleChange}
                />
              </Form.Group>
            </>
          )}

          {/* Formulário para Equipamentos */}
          {userType === 'equipamento' && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  name="nome"
                  placeholder="Nome do Equipamento"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Número da Frota</Form.Label>
                <Form.Control
                  type="text"
                  name="numeroFrota"
                  placeholder="Número da Frota"
                  value={formData.numeroFrota}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Marca</Form.Label>
                <Form.Control
                  type="text"
                  name="marca"
                  placeholder="Marca do Equipamento"
                  value={formData.marca}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Tipo de Equipamento</Form.Label>
                <Form.Select name="tipoEquipamento" value={formData.tipoEquipamento} onChange={handleChange}>
                  <option value="">Selecione</option>
                  <option value="caminhao">Caminhão</option>
                  <option value="paleteira">Paleteira</option>
                  <option value="empilhadeira">Empilhadeira</option>
                  <option value="carrinhos">Carrinhos</option>
                  <option value="docas">Docas</option>
                  <option value="paleteiraEletrica">Paleteira Elétrica</option>
                  <option value="empilhadeiraPatolada">Empilhadeira Patolada</option>
                </Form.Select>
              </Form.Group>
              {/* Mostrar KM e Horímetro apenas para tipos que precisam */}
              {(formData.tipoEquipamento === 'caminhao' || formData.tipoEquipamento === 'empilhadeira') && (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>KM</Form.Label>
                    <Form.Control
                      type="number"
                      name="km"
                      placeholder="Digite o KM"
                      value={formData.km}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Horímetro</Form.Label>
                    <Form.Control
                      type="number"
                      name="horimetro"
                      placeholder="Digite o Horímetro"
                      value={formData.horimetro}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </>
              )}
            </>
          )}

          {/* Formulário para Status */}
          {userType === 'status' && (
            <>
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

          <Button variant="dark" type="submit" className="w-100">Salvar</Button>
        </Form>
      </Row>
    </Container>
  );
};

export default Cadastro;
