const mongoose = require('mongoose');

const colaboradorSchema = new mongoose.Schema({
  nome: String,
  funcao: String,
  telefone: String
});

module.exports = mongoose.model('Colaborador', colaboradorSchema);
