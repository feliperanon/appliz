import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

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
  });
  const [cadastros, setCadastros] = useState([]); // Lista de cadastros
  const [mapPosition, setMapPosition] = useState({ lat: -19.9191, lng: -43.9386 }); // Coordenadas iniciais (ex: Belo Horizonte)
  const [markerPosition, setMarkerPosition] = useState(null); // Local onde o marcador será colocado

  // Substitua pela sua chave de API
  const googleMapsApiKey = 'YOUR_GOOGLE_MAPS_API_KEY';

  // Função para atualizar os dados do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função para carregar cadastros ao iniciar a página
  useEffect(() => {
    fetchCadastros();
  }, []);

  const fetchCadastros = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/cadastros');
      const data = await response.json();
      setCadastros(data);
    } catch (error) {
      console.error('Erro ao buscar cadastros:', error);
    }
  };

  // Função para envio do formulário e verificação de duplicatas
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Verificar duplicata
      const verificarResponse = await fetch('http://localhost:5000/api/verificar-duplicata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome: formData.nome }),
      });

      if (verificarResponse.status === 400) {
        alert('Cadastro duplicado! O nome já existe.');
        return;
      }

      // Se não for duplicado, enviar para o backend
      const response = await fetch('http://localhost:5000/api/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        fetchCadastros(); // Atualizar a lista de cadastros após a inserção
      } else {
        alert('Erro ao realizar o cadastro.');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
    }
  };

  // Atualizar posição do marcador no mapa
  const handleMapClick = (e) => {
    const newLat = e.latLng.lat();
    const newLng = e.latLng.lng();
    setMarkerPosition({ lat: newLat, lng: newLng });
    setFormData({ ...formData, latitude: newLat, longitude: newLng });
  };

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

          {/* Outras opções de cadastro... */}

          <Button variant="dark" type="submit" className="w-100">Salvar</Button>
        </Form>

        {/* Exibir lista de cadastros */}
        <h3 className="mt-4">Cadastros Realizados</h3>
        <ul>
          {cadastros.map((cadastro, index) => (
            <li key={index}>
              {cadastro.nome} - {cadastro.funcao || cadastro.endereco || cadastro.numeroFrota || cadastro.statusOperacional}
            </li>
          ))}
        </ul>
      </Row>
    </Container>
  );
};

export default Cadastro;
