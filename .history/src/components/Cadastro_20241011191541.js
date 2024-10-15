import React, { useState } from 'react';

function Cadastro() {
  const [userType, setUserType] = useState(''); // Definindo o tipo de cadastro
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    funcao: '',
    capacidadeCarga: '',
    estadoManutencao: '',
    statusOperacional: '',
  });

  // Atualizando os dados do formulário com base nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Lógica para envio do cadastro
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    // Aqui você conectaria ao backend para enviar os dados
  };

  return (
    <div>
      <h1>Cadastro Central de Dados</h1>
      
      <label>Selecione o tipo de cadastro:</label>
      <select value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="">Selecione</option>
        <option value="colaborador">Colaborador</option>
        <option value="cliente">Cliente</option>
        <option value="equipamento">Equipamento</option>
        <option value="status">Status</option>
      </select>

      <form onSubmit={handleSubmit}>
        {userType === 'colaborador' && (
          <div>
            <h2>Cadastro de Colaboradores</h2>
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={formData.nome}
              onChange={handleChange}
            />
            <input
              type="text"
              name="funcao"
              placeholder="Função"
              value={formData.funcao}
              onChange={handleChange}
            />
            <input
              type="text"
              name="statusOperacional"
              placeholder="Status de Disponibilidade"
              value={formData.statusOperacional}
              onChange={handleChange}
            />
          </div>
        )}

        {userType === 'cliente' && (
          <div>
            <h2>Cadastro de Clientes</h2>
            <input
              type="text"
              name="nome"
              placeholder="Nome do Cliente"
              value={formData.nome}
              onChange={handleChange}
            />
            <input
              type="text"
              name="endereco"
              placeholder="Endereço"
              value={formData.endereco}
              onChange={handleChange}
            />
            {/* Adicionar campos como histórico de pedidos */}
          </div>
        )}

        {userType === 'equipamento' && (
          <div>
            <h2>Cadastro de Equipamentos</h2>
            <input
              type="text"
              name="nome"
              placeholder="Nome do Equipamento"
              value={formData.nome}
              onChange={handleChange}
            />
            <input
              type="text"
              name="capacidadeCarga"
              placeholder="Capacidade de Carga"
              value={formData.capacidadeCarga}
              onChange={handleChange}
            />
            <input
              type="text"
              name="estadoManutencao"
              placeholder="Estado de Manutenção"
              value={formData.estadoManutencao}
              onChange={handleChange}
            />
          </div>
        )}

        {userType === 'status' && (
          <div>
            <h2>Cadastro de Status Operacional</h2>
            <input
              type="text"
              name="statusOperacional"
              placeholder="Status Operacional"
              value={formData.statusOperacional}
              onChange={handleChange}
            />
            {/* Adicionar campos para mais detalhes de status */}
          </div>
        )}

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
