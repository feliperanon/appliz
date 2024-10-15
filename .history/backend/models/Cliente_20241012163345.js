const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nome: String,
  endereco: String,
  latitude: String,
  longitude: String
});

module.exports = mongoose.model('Cliente', clienteSchema);
