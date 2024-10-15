const mongoose = require('mongoose');

const colaboradorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true, // Nome é obrigatório
  },
  funcao: {
    type: String,
    required: true, // Função é obrigatória
    enum: [
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
    ],
  },
  telefone: {
    type: String,
    required: true, // Telefone é obrigatório
  },
  status: {
    type: String,
    enum: ['Ativo', 'Inativo'],
    required: true, // Status é obrigatório
  }
}, { timestamps: true });

const Colaborador = mongoose.model('Colaborador', colaboradorSchema);

module.exports = Colaborador;
