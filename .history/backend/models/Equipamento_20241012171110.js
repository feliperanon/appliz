const mongoose = require('mongoose');

const equipamentoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  numeroFrota: String,
  marca: String,
  tipoEquipamento: { type: String, required: true },
  km: String,
  horimetro: String,
});

module.exports = mongoose.model('Equipamento', equipamentoSchema);
