const express = require('express');
const router = express.Router();
const Colaborador = require('../models/Colaborador');

// Criar um ou mais colaboradores
router.post('/', async (req, res) => {
  try {
    const { nome, funcao, telefone, status } = req.body;

    // Validações básicas no backend
    if (!nome || !funcao || !telefone || !status) {
      return res.status(400).json({ message: 'Preencha todos os campos obrigatórios.' });
    }

    if (Array.isArray(req.body)) {
      const novosColaboradores = await Colaborador.insertMany(req.body);
      res.status(201).json({ message: 'Colaboradores criados com sucesso', colaboradores: novosColaboradores });
    } else {
      const novoColaborador = new Colaborador({ nome, funcao, telefone, status });
      await novoColaborador.save();
      res.status(201).json({ message: 'Colaborador criado com sucesso', colaborador: novoColaborador });
    }
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar colaborador', error });
  }
});

// Obter todos os colaboradores
router.get('/', async (req, res) => {
  try {
    const colaboradores = await Colaborador.find();
    res.status(200).json(colaboradores);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao buscar colaboradores', error });
  }
});

// Atualizar colaborador
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, funcao, telefone, status } = req.body;

    if (!nome || !funcao || !telefone || !status) {
      return res.status(400).json({ message: 'Preencha todos os campos obrigatórios.' });
    }

    const colaboradorAtualizado = await Colaborador.findByIdAndUpdate(id, { nome, funcao, telefone, status }, { new: true });
    res.status(200).json({ message: 'Colaborador atualizado com sucesso', colaborador: colaboradorAtualizado });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar colaborador', error });
  }
});

// Excluir colaborador
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Colaborador.findByIdAndDelete(id);
    res.status(200).json({ message: 'Colaborador excluído com sucesso' });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao excluir colaborador', error });
  }
});

module.exports = router;
