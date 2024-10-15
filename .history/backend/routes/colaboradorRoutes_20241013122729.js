const express = require('express');
const router = express.Router();
const Colaborador = require('../models/Colaborador');

// Buscar todos os colaboradores
router.get('/', async (req, res) => {
  try {
    const colaboradores = await Colaborador.find();
    res.json(colaboradores);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar colaboradores', error });
  }
});

module.exports = router;
