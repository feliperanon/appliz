const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  perfilAcesso: { type: String, enum: ['Admin', 'Gestor', 'Operacional', 'Consultor'], required: true },
});

module.exports = mongoose.model('Usuario', usuarioSchema);
