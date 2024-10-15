import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Cadastro = () => {
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    latitude: '',
    longitude: ''
  });
  const [mapPosition, setMapPosition] = useState({ lat: -19.9191, lng: -43.9386 }); // Coordenadas iniciais (ex: Belo Horizonte)
  const [markerPosition, setMarkerPosition] = useState(null); // Local onde o marcador será colocado

  // Substitua pela sua chave de API
  const googleMapsApiKey = 'AIzaSyBMYVf_DNrDDP3szRbkO4CsEGIVNdvJy80';

  // Atualizar dados do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Enviar formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    // Conectar ao backend
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
          {/* Tipo de Cadastro */}
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

          {/* Formulário para Clientes com Google Maps */}
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
                <Form.Label>Endereço (Manual ou Selecionar no Mapa)</Form.Label>
                <Form.Control
                  type="text"
                  name="endereco"
                  placeholder="Digite o endereço"
                  value={formData.endereco}
                  onChange={handleChange}
                />
              </Form.Group>

              {/* Exibir Mapa para Seleção de Endereço */}
              <LoadScript googleMapsApiKey={googleMapsApiKey}>
                <GoogleMap
                  mapContainerStyle={{ width: '100%', height: '400px' }}
                  center={mapPosition}
                  zoom={13}
                  onClick={handleMapClick} // Atualizar posição com clique
                >
                  {markerPosition && <Marker position={markerPosition} />}
                </GoogleMap>
              </LoadScript>

              {/* Mostrar Latitude e Longitude */}
              {markerPosition && (
                <div className="mt-3">
                  <p><strong>Coordenadas Selecionadas:</strong></p>
                  <p>Latitude: {markerPosition.lat}</p>
                  <p>Longitude: {markerPosition.lng}</p>
                </div>
              )}
            </>
          )}

          <Button variant="dark" type="submit" className="w-100">Salvar</Button>
        </Form>
      </Row>
    </Container>
  );
};

export default Cadastro;
