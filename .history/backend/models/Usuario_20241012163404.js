const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  senha: String
});

module.exports = mongoose.model('Usuario', usuarioSchema);
