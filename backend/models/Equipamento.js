const mongoose = require('mongoose');

const equipamentoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  numeroFrota: { type: String },
  marca: { type: String, required: true },
  tipoEquipamento: { type: String, required: true },
  km: { type: Number },
  horimetro: { type: Number },
  statusOperacional: { type: String, required: true },
});

module.exports = mongoose.model('Equipamento', equipamentoSchema);
