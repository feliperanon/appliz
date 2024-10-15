const express = require('express');
const Colaborador = require('../models/Colaborador');
const Cliente = require('../models/Cliente');
const Equipamento = require('../models/Equipamento');
const Status = require('../models/Status');
const Usuario = require('../models/Usuario');

const router = express.Router();

// Rota para criar cadastro
router.post('/:tipo', async (req, res) => {
  const { tipo } = req.params;
  let Model;

  switch (tipo) {
    case 'colaborador':
      Model = Colaborador;
      break;
    case 'cliente':
      Model = Cliente;
      break;
    case 'equipamento':
      Model = Equipamento;
      break;
    case 'status':
      Model = Status;
      break;
    case 'usuario':
      Model = Usuario;
      break;
    default:
      return res.status(400).send('Tipo de cadastro inválido');
  }

  try {
    const novoCadastro = new Model(req.body);
    await novoCadastro.save();
    res.status(201).send(`${tipo.charAt(0).toUpperCase() + tipo.slice(1)} cadastrado com sucesso!`);
  } catch (error) {
    res.status(400).send(`Erro ao cadastrar ${tipo}`);
  }
});

// Rota para listar cadastros
router.get('/:tipo', async (req, res) => {
  const { tipo } = req.params;
  let Model;

  switch (tipo) {
    case 'colaborador':
      Model = Colaborador;
      break;
    case 'cliente':
      Model = Cliente;
      break;
    case 'equipamento':
      Model = Equipamento;
      break;
    case 'status':
      Model = Status;
      break;
    case 'usuario':
      Model = Usuario;
      break;
    default:
      return res.status(400).send('Tipo de cadastro inválido');
  }

  try {
    const cadastros = await Model.find();
    res.status(200).json(cadastros);
  } catch (error) {
    res.status(400).send('Erro ao listar cadastros');
  }
});

// Rota para alterar cadastro
router.put('/:tipo/:id', async (req, res) => {
  const { tipo, id } = req.params;
  let Model;

  switch (tipo) {
    case 'colaborador':
      Model = Colaborador;
      break;
    case 'cliente':
      Model = Cliente;
      break;
    case 'equipamento':
      Model = Equipamento;
      break;
    case 'status':
      Model = Status;
      break;
    case 'usuario':
      Model = Usuario;
      break;
    default:
      return res.status(400).send('Tipo de cadastro inválido');
  }

  try {
    const cadastroAtualizado = await Model.findByIdAndUpdate(id, req.body, { new: true });
    if (!cadastroAtualizado) {
      return res.status(404).send(`${tipo.charAt(0).toUpperCase() + tipo.slice(1)} não encontrado`);
    }
    res.status(200).send(`${tipo.charAt(0).toUpperCase() + tipo.slice(1)} atualizado com sucesso!`);
  } catch (error) {
    res.status(400).send(`Erro ao atualizar ${tipo}`);
  }
});

// Rota para excluir cadastro
router.delete('/:tipo/:id', async (req, res) => {
  const { tipo, id } = req.params;
  let Model;

  switch (tipo) {
    case 'colaborador':
      Model = Colaborador;
      break;
    case 'cliente':
      Model = Cliente;
      break;
    case 'equipamento':
      Model = Equipamento;
      break;
    case 'status':
      Model = Status;
      break;
    case 'usuario':
      Model = Usuario;
      break;
    default:
      return res.status(400).send('Tipo de cadastro inválido');
  }

  try {
    const cadastroDeletado = await Model.findByIdAndDelete(id);
    if (!cadastroDeletado) {
      return res.status(404).send(`${tipo.charAt(0).toUpperCase() + tipo.slice(1)} não encontrado`);
    }
    res.status(200).send(`${tipo.charAt(0).toUpperCase() + tipo.slice(1)} excluído com sucesso!`);
  } catch (error) {
    res.status(400).send(`Erro ao excluir ${tipo}`);
  }
});

module.exports = router;
