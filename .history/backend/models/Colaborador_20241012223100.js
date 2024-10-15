const mongoose = require('mongoose');

const colaboradorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  funcao: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Ativo', 'Inativo'],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Colaborador', colaboradorSchema);
