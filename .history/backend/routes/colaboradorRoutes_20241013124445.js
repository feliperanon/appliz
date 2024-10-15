const express = require('express');
const router = express.Router();
const Colaborador = require('../models/Colaborador');

// Obter todos os colaboradores
router.get('/', async (req, res) => {
  try {
    const colaboradores = await Colaborador.find();
    res.json(colaboradores);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar colaboradores', error });
  }
});

// Criar um colaborador
router.post('/', async (req, res) => {
  try {
    const novoColaborador = new Colaborador(req.body);
    await novoColaborador.save();
    res.status(201).json({ message: 'Colaborador criado com sucesso', colaborador: novoColaborador });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar colaborador', error });
  }
});

module.exports = router;
