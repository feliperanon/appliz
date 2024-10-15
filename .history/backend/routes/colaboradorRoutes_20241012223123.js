const express = require('express');
const router = express.Router();
const Colaborador = require('../models/Colaborador');

// GET - Buscar todos os colaboradores
router.get('/', async (req, res) => {
  try {
    const colaboradores = await Colaborador.find();
    res.json(colaboradores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST - Cadastrar um novo colaborador
router.post('/', async (req, res) => {
  const { nome, funcao, status } = req.body;
  const novoColaborador = new Colaborador({ nome, funcao, status });

  try {
    const colaboradorSalvo = await novoColaborador.save();
    res.status(201).json(colaboradorSalvo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT - Atualizar um colaborador
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, funcao, status } = req.body;

  try {
    const colaboradorAtualizado = await Colaborador.findByIdAndUpdate(id, { nome, funcao, status }, { new: true });
    if (!colaboradorAtualizado) {
      return res.status(404).json({ message: 'Colaborador não encontrado' });
    }
    res.json(colaboradorAtualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE - Excluir um colaborador
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const colaboradorExcluido = await Colaborador.findByIdAndDelete(id);
    if (!colaboradorExcluido) {
      return res.status(404).json({ message: 'Colaborador não encontrado' });
    }
    res.json({ message: 'Colaborador excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
