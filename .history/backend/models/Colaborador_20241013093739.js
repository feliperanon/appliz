const mongoose = require('mongoose');

const colaboradorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  funcao: {
    type: String,
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
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Ativo', 'Inativo'],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Colaborador', colaboradorSchema);
