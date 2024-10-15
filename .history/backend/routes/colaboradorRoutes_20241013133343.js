const express = require('express');
const router = express.Router();
const Colaborador = require('../models/Colaborador');

// Rota para buscar todos os colaboradores
router.get('/', async (req, res) => {
  try {
    const colaboradores = await Colaborador.find();
    res.status(200).json(colaboradores);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar colaboradores', error });
  }
});

// Outras rotas para criar, atualizar e deletar colaboradores...

module.exports = router;
