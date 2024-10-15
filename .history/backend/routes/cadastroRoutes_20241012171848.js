const express = require('express');
const Colaborador = require('../models/Colaborador');
const Cliente = require('../models/Cliente');
const Equipamento = require('../models/Equipamento');
const Status = require('../models/Status');
const Usuario = require('../models/Usuario');

const router = express.Router();

// Função auxiliar para identificar o Model correto com base no tipo
const getModelByType = (tipo) => {
  switch (tipo) {
    case 'colaborador':
      return Colaborador;
    case 'cliente':
      return Cliente;
    case 'equipamento':
      return Equipamento;
    case 'status':
      return Status;
    case 'usuario':
      return Usuario;
    default:
      throw new Error('Tipo inválido');
  }
};

// Criar cadastro
router.post('/:tipo', async (req, res) => {
  try {
    const Model = getModelByType(req.params.tipo);
    const novoCadastro = new Model(req.body);
    await novoCadastro.save();
    res.status(201).send('Cadastro realizado com sucesso!');
  } catch (error) {
    res.status(400).send('Erro ao realizar cadastro');
  }
});

// Listar cadastros
router.get('/:tipo', async (req, res) => {
  try {
    const Model = getModelByType(req.params.tipo);
    const cadastros = await Model.find();
    res.status(200).json(cadastros);
  } catch (error) {
    res.status(400).send('Erro ao buscar cadastros');
  }
});

// Atualizar cadastro
router.put('/:tipo/:id', async (req, res) => {
  try {
    const Model = getModelByType(req.params.tipo);
    const cadastroAtualizado = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cadastroAtualizado) {
      return res.status(404).send('Cadastro não encontrado');
    }
    res.status(200).send('Cadastro atualizado com sucesso!');
  } catch (error) {
    res.status(400).send('Erro ao atualizar cadastro');
  }
});

// Excluir cadastro
router.delete('/:tipo/:id', async (req, res) => {
  try {
    const Model = getModelByType(req.params.tipo);
    const cadastroDeletado = await Model.findByIdAndDelete(req.params.id);
    if (!cadastroDeletado) {
      return res.status(404).send('Cadastro não encontrado');
    }
    res.status(200).send('Cadastro excluído com sucesso!');
  } catch (error) {
    res.status(400).send('Erro ao excluir cadastro');
  }
});

module.exports = router;
