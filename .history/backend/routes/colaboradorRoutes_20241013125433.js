const express = require('express');
const router = express.Router();
const Colaborador = require('../models/Colaborador');

// Buscar todos os colaboradores
router.get('/', async (req, res) => {
  try {
    const colaboradores = await Colaborador.find();
    res.json(colaboradores);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar colaboradores' });
  }
});

// Criar colaborador
router.post('/', async (req, res) => {
  try {
    const novoColaborador = new Colaborador(req.body);
    await novoColaborador.save();
    res.status(201).json(novoColaborador);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar colaborador' });
  }
});

// Atualizar colaborador
router.put('/:id', async (req, res) => {
  try {
    const colaborador = await Colaborador.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(colaborador);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar colaborador' });
  }
});

// Deletar colaborador
router.delete('/:id', async (req, res) => {
  try {
    await Colaborador.findByIdAndDelete(req.params.id);
    res.json({ message: 'Colaborador excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir colaborador' });
  }
});

module.exports = router;
