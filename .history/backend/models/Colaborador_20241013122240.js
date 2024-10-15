const mongoose = require('mongoose');

const colaboradorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'Path `nome` is required.'],
  },
  funcao: {
    type: String,
    enum: [
      'ANALISTA ADMINISTRATIVO',
      'ANALISTA COMERCIAL',
      'ASSISTENTE OP LOGISTICA',
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
      'ASSISTENTE OPERACIONAL DE LOGÍSTICA',
      'SUPERVISOR DE VENDAS',
      'REPOSITOR',
      'AUXILIAR DE LOGISTICA',
      'ANALISTA OPERACIONAL DE ESTOQUE'
    ],
    required: [true, 'Path `funcao` is required.'],
  },
  telefone: {
    type: String,
    required: [true, 'Path `telefone` is required.'],
  },
  status: {
    type: String,
    enum: ['Ativo', 'Inativo'],
    required: [true, 'Path `status` is required.'],
  }
}, { timestamps: true });

const Colaborador = mongoose.model('Colaborador', colaboradorSchema);

module.exports = Colaborador;
