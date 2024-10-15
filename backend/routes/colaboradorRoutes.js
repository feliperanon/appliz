const express = require('express');
const router = express.Router();
const Colaborador = require('../models/Colaborador');

// POST - Cadastrar um ou mais colaboradores
router.post('/', async (req, res) => {
  try {
    if (Array.isArray(req.body)) {
      const novosColaboradores = await Colaborador.insertMany(req.body);
      res.status(201).json({ message: 'Colaboradores criados com sucesso', colaboradores: novosColaboradores });
    } else {
      const novoColaborador = new Colaborador(req.body);
      const colaboradorSalvo = await novoColaborador.save();
      res.status(201).json({ message: 'Colaborador criado com sucesso', colaborador: colaboradorSalvo });
    }
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar colaborador', error });
  }
});

// GET - Buscar todos os colaboradores
router.get('/', async (req, res) => {
  try {
    const colaboradores = await Colaborador.find();
    res.json(colaboradores);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar colaboradores', error });
  }
});

// PUT - Atualizar um colaborador
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, funcao, telefone, status } = req.body;

  try {
    const colaboradorAtualizado = await Colaborador.findByIdAndUpdate(id, { nome, funcao, telefone, status }, { new: true });
    if (!colaboradorAtualizado) {
      return res.status(404).json({ message: 'Colaborador não encontrado' });
    }
    res.json(colaboradorAtualizado);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar colaborador', error });
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
    res.status(500).json({ message: 'Erro ao excluir colaborador', error });
  }
});

module.exports = router;
