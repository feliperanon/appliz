const express = require('express');
const router = express.Router();
const Colaborador = require('../models/Colaborador');
const Cliente = require('../models/Cliente');
const Equipamento = require('../models/Equipamento');
const Status = require('../models/Status');
const Usuario = require('../models/Usuario');

// Rotas para Colaborador
router.post('/colaborador', async (req, res) => {
  try {
    const colaborador = new Colaborador(req.body);
    await colaborador.save();
    res.status(201).json(colaborador);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/colaborador', async (req, res) => {
  try {
    const colaboradores = await Colaborador.find();
    res.json(colaboradores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/colaborador/:id', async (req, res) => {
  try {
    const colaborador = await Colaborador.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(colaborador);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/colaborador/:id', async (req, res) => {
  try {
    await Colaborador.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Rotas para Cliente
router.post('/cliente', async (req, res) => {
  try {
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Repita o padrão para Cliente, Equipamento, Status, e Usuario...

module.exports = router;
