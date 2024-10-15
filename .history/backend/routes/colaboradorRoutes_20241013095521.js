const express = require('express');
const router = express.Router();
const Colaborador = require('../models/Colaborador');

// Criar um ou mais colaboradores
router.post('/colaboradores', async (req, res) => {
  try {
    // Verifica se o corpo da requisição é um array (múltiplos colaboradores)
    if (Array.isArray(req.body)) {
      const novosColaboradores = await Colaborador.insertMany(req.body);
      res.status(201).json({ message: 'Colaboradores criados com sucesso', colaboradores: novosColaboradores });
    } else {
      // Se não for array, trata como um único colaborador
      const novoColaborador = new Colaborador(req.body);
      await novoColaborador.save();
      res.status(201).json({ message: 'Colaborador criado com sucesso', colaborador: novoColaborador });
    }
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar colaborador', error });
  }
});

module.exports = router;
