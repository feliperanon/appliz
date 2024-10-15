const mongoose = require('mongoose');

const colaboradorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  funcao: { type: String, required: true },
  telefone: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: String, enum: ['Ativo', 'Férias', 'Desligado'], default: 'Ativo' },
});

module.exports = mongoose.model('Colaborador', colaboradorSchema);
