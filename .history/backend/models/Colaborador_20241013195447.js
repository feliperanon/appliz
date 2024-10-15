const express = require('express');
const router = express.Router();
const Colaborador = require('../models/Colaborador');

// Criar um ou mais colaboradores
router.post('/', async (req, res) => {
  try {
    if (Array.isArray(req.body)) {
      const novosColaboradores = await Colaborador.insertMany(req.body);
      res.status(201).json({ message: 'Colaboradores criados com sucesso', colaboradores: novosColaboradores });
    } else {
      const novoColaborador = new Colaborador(req.body);
      await novoColaborador.save();
      res.status(201).json({ message: 'Colaborador criado com sucesso', colaborador: novoColaborador });
    }
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar colaborador', error });
  }
});

// Rota para buscar todos os colaboradores
router.get('/', async (req, res) => {
  try {
    const colaboradores = await Colaborador.find();
    res.status(200).json(colaboradores);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar colaboradores', error });
  }
});

// Rota para buscar colaborador por ID
router.get('/:id', async (req, res) => {
  try {
    const colaborador = await Colaborador.findById(req.params.id);
    if (!colaborador) {
      return res.status(404).json({ message: 'Colaborador não encontrado' });
    }
    res.status(200).json(colaborador);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar colaborador', error });
  }
});

// Rota para atualizar um colaborador pelo ID
router.put('/:id', async (req, res) => {
  try {
    const colaboradorAtualizado = await Colaborador.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!colaboradorAtualizado) {
      return res.status(404).json({ message: 'Colaborador não encontrado' });
    }
    res.status(200).json({ message: 'Colaborador atualizado com sucesso', colaborador: colaboradorAtualizado });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar colaborador', error });
  }
});

// Rota para excluir um colaborador pelo ID
router.delete('/:id', async (req, res) => {
  try {
    const colaboradorDeletado = await Colaborador.findByIdAndDelete(req.params.id);
    if (!colaboradorDeletado) {
      return res.status(404).json({ message: 'Colaborador não encontrado' });
    }
    res.status(200).json({ message: 'Colaborador excluído com sucesso', colaborador: colaboradorDeletado });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir colaborador', error });
  }
});

module.exports = router;
