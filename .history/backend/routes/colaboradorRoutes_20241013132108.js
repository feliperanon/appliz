const express = require('express');
const router = express.Router();
const Colaborador = require('../models/Colaborador');

// Criar um colaborador
router.post('/', async (req, res) => {
  const { nome, funcao, telefone, status } = req.body;

  // Validação básica para garantir que os campos obrigatórios estão presentes
  if (!nome || !funcao || !telefone || !status) {
    return res.status(400).json({ message: 'Preencha todos os campos obrigatórios.' });
  }

  try {
    const novoColaborador = new Colaborador({ nome, funcao, telefone, status });
    await novoColaborador.save();
    res.status(201).json({ message: 'Colaborador criado com sucesso', colaborador: novoColaborador });
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar colaborador', error });
  }
});
