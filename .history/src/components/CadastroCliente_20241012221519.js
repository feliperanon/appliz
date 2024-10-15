import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { LoadScript, Autocomplete } from '@react-google-maps/api';

const CadastroCliente = () => {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    latitude: '',
    longitude: ''
  });
  const [autocomplete, setAutocomplete] = useState(null);

  const handlePlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      const address = place.formatted_address || '';
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();

      setFormData({
        ...formData,
        endereco: address,
        latitude: lat,
        longitude: lng
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados para o backend
    console.log(formData);
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <h3 className="text-center mb-4">Cadastro de Cliente</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nome do Cliente</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Digite o nome do cliente"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Endereço</Form.Label>
              <LoadScript googleMapsApiKey="AIzaSyBMYVf_DNrDDP3szRbkO4CsEGIVNdvJy80" libraries={['places']}>
                <Autocomplete onLoad={setAutocomplete} onPlaceChanged={handlePlaceChanged}>
                  <Form.Control
                    type="text"
                    placeholder="Digite o endereço ou selecione no mapa"
                    value={formData.endereco}
                    onChange={handleChange}
                    required
                  />
                </Autocomplete>
              </LoadScript>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Cadastrar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CadastroCliente;
