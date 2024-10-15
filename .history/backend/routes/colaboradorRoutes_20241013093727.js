const express = require('express');
const router = express.Router();
const Colaborador = require('../models/Colaborador');

// Rota para listar todos os colaboradores
router.get('/', async (req, res) => {
  try {
    const colaboradores = await Colaborador.find();
    res.json(colaboradores);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar colaboradores', error });
  }
});

// Rota para criar um novo colaborador
router.post('/', async (req, res) => {
  const { nome, funcao, telefone, status } = req.body;
  try {
    const novoColaborador = new Colaborador({ nome, funcao, telefone, status });
    await novoColaborador.save();
    res.status(201).json(novoColaborador);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar colaborador', error });
  }
});

// Rota para atualizar um colaborador existente
router.put('/:id', async (req, res) => {
  const { nome, funcao, telefone, status } = req.body;
  try {
    const colaborador = await Colaborador.findByIdAndUpdate(
      req.params.id,
      { nome, funcao, telefone, status },
      { new: true }
    );
    res.json(colaborador);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar colaborador', error });
  }
});

// Rota para deletar um colaborador
router.delete('/:id', async (req, res) => {
  try {
    await Colaborador.findByIdAndDelete(req.params.id);
    res.json({ message: 'Colaborador excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir colaborador', error });
  }
});

module.exports = router;
