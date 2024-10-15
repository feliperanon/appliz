const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  endereco: { type: String, required: true },
  latitude: String,
  longitude: String,
});

module.exports = mongoose.model('Cliente', clienteSchema);
