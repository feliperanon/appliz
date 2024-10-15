const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  endereco: { type: String, required: true },
  contato: { type: String, required: true },
  tipoCliente: { type: String, required: true },
  frequenciaEntrega: { type: String },
});

module.exports = mongoose.model('Cliente', clienteSchema);
