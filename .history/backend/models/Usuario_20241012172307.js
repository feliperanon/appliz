const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  senha: { type: String, required: true },
});

// Verifica se o modelo já foi registrado para evitar sobrescrever
module.exports = mongoose.models.Usuario || mongoose.model('Usuario', usuarioSchema);
