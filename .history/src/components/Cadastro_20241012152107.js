import React, { useState } from 'react';

const Cadastro = () => {
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
    longitude: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Função handleSubmit para enviar os dados ao backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        // Limpar os campos após o sucesso do cadastro
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
          longitude: ''
        });
      } else {
        alert('Erro ao realizar cadastro');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      alert('Erro ao realizar cadastro');
    }
  };

  return (
    <div className="container">
      <h2>Cadastro (Central de Dados)</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="form-control"
            placeholder="Digite o nome"
          />
        </div>
        <div className="form-group">
          <label>Função</label>
          <input
            type="text"
            name="funcao"
            value={formData.funcao}
            onChange={handleChange}
            className="form-control"
            placeholder="Digite a função"
          />
        </div>
        <div className="form-group">
          <label>Telefone</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            className="form-control"
            placeholder="Digite o telefone"
          />
        </div>
        <div className="form-group">
          <label>Endereço</label>
          <input
            type="text"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            className="form-control"
            placeholder="Digite o endereço"
          />
        </div>
        <div className="form-group">
          <label>Número da Frota</label>
          <input
            type="text"
            name="numeroFrota"
            value={formData.numeroFrota}
            onChange={handleChange}
            className="form-control"
            placeholder="Digite o número da frota"
          />
        </div>
        <div className="form-group">
          <label>Marca</label>
          <input
            type="text"
            name="marca"
            value={formData.marca}
            onChange={handleChange}
            className="form-control"
            placeholder="Digite a marca"
          />
        </div>
        <div className="form-group">
          <label>Tipo de Equipamento</label>
          <input
            type="text"
            name="tipoEquipamento"
            value={formData.tipoEquipamento}
            onChange={handleChange}
            className="form-control"
            placeholder="Digite o tipo de equipamento"
          />
        </div>
        <div className="form-group">
          <label>KM</label>
          <input
            type="text"
            name="km"
            value={formData.km}
            onChange={handleChange}
            className="form-control"
            placeholder="Digite o KM"
          />
        </div>
        <div className="form-group">
          <label>Horímetro</label>
          <input
            type="text"
            name="horimetro"
            value={formData.horimetro}
            onChange={handleChange}
            className="form-control"
            placeholder="Digite o Horímetro"
          />
        </div>
        <div className="form-group">
          <label>Status Operacional</label>
          <input
            type="text"
            name="statusOperacional"
            value={formData.statusOperacional}
            onChange={handleChange}
            className="form-control"
            placeholder="Digite o status operacional"
          />
        </div>
        <div className="form-group">
          <label>Latitude</label>
          <input
            type="text"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            className="form-control"
            placeholder="Digite a latitude"
          />
        </div>
        <div className="form-group">
          <label>Longitude</label>
          <input
            type="text"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            className="form-control"
            placeholder="Digite a longitude"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Salvar
        </button>
      </form>
    </div>
  );
};

export default Cadastro;
