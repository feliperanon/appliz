const mongoose = require('mongoose');

const equipamentoSchema = new mongoose.Schema({
  nome: String,
  numeroFrota: String,
  marca: String,
  tipoEquipamento: String,
  km: String,
  horimetro: String
});

module.exports = mongoose.model('Equipamento', equipamentoSchema);
