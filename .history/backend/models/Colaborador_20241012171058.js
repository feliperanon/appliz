const mongoose = require('mongoose');

const colaboradorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  funcao: { type: String, required: true },
  telefone: { type: String, required: true },
});

module.exports = mongoose.model('Colaborador', colaboradorSchema);
