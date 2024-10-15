const mongoose = require('mongoose');

const colaboradorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  funcao: {
    type: String,
    enum: [
      'ANALISTA ADMINISTRATIVO',
      'ANALISTA COMERCIAL',
      'ASSISTENTE OPERACIONAL DE LOGÍSTICA',
      'AUXILIAR ADMINISTRATIVO',
      'AUXILIAR DE FATURAMENTO',
      'AUXILIAR SERVIÇOS GERAIS',
      'CAIXA',
      'CARREGADOR',
      'CONFERENTE',
      'ENTREGADOR',
      'ESTOQUISTA',
      'MOTORISTA',
      'OPERADOR DE EMPILHADEIRA',
      'VENDEDOR',
      'AUXILIAR DE LOGÍSTICA',
      'SUPERVISOR DE VENDAS',
      'ANALISTA OPERACIONAL DE ESTOQUE',
      'AUXILIAR COMERCIAL',
      'REPOSITOR'
    ],
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Ativo', 'Inativo'],
    required: true,
  }
}, { timestamps: true });

const Colaborador = mongoose.model('Colaborador', colaboradorSchema);

module.exports = Colaborador;
