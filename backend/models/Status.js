const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
  nomeColaborador: { type: String, required: true },
  statusAtual: { type: String, required: true },
  dataHora: { type: Date, default: Date.now },
  observacoes: { type: String },
});

module.exports = mongoose.model('Status', statusSchema);
