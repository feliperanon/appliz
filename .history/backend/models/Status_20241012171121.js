const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  senha: { type: String, required: true },
});

module.exports = mongoose.model('Usuario', usuarioSchema);
