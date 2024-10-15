const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente');
const Colaborador = require('../models/Colaborador');
const Equipamento = require('../models/Equipamento');
const Status = require('../models/Status');
const Usuario = require('../models/Usuario');

// =====================================
// Rotas para CLIENTE
// =====================================

// GET - Buscar todos os clientes
router.get('/cliente', async (req, res) => {
  try {
    const clientes = await Cliente.find(); // Retorna todos os clientes
    res.status(200).json(clientes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar clientes', error });
  }
});

// POST - Criar novo cliente
router.post('/cliente', async (req, res) => {
  const { nome, endereco, contato, tipoCliente, frequenciaEntrega } = req.body;
  const novoCliente = new Cliente({ nome, endereco, contato, tipoCliente, frequenciaEntrega });

  try {
    await novoCliente.save(); // Salva o cliente no banco de dados
    res.status(201).json(novoCliente);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar cliente', error });
  }
});

// PUT - Atualizar cliente por ID
router.put('/cliente/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, endereco, contato, tipoCliente, frequenciaEntrega } = req.body;

  try {
    const clienteAtualizado = await Cliente.findByIdAndUpdate(id, {
      nome, endereco, contato, tipoCliente, frequenciaEntrega
    }, { new: true });
    
    if (!clienteAtualizado) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    res.status(200).json(clienteAtualizado);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar cliente', error });
  }
});

// DELETE - Excluir cliente por ID
router.delete('/cliente/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const clienteExcluido = await Cliente.findByIdAndDelete(id);
    if (!clienteExcluido) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }

    res.status(200).json({ message: 'Cliente excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir cliente', error });
  }
});

// =====================================
// Rotas para COLABORADOR
// =====================================

// GET - Buscar todos os colaboradores
router.get('/colaborador', async (req, res) => {
  try {
    const colaboradores = await Colaborador.find();
    res.status(200).json(colaboradores);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar colaboradores', error });
  }
});

// POST - Criar novo colaborador
router.post('/colaborador', async (req, res) => {
  const { nome, funcao, telefone, email, status } = req.body;
  const novoColaborador = new Colaborador({ nome, funcao, telefone, email, status });

  try {
    await novoColaborador.save();
    res.status(201).json(novoColaborador);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar colaborador', error });
  }
});

// PUT - Atualizar colaborador por ID
router.put('/colaborador/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, funcao, telefone, email, status } = req.body;

  try {
    const colaboradorAtualizado = await Colaborador.findByIdAndUpdate(id, {
      nome, funcao, telefone, email, status
    }, { new: true });
    
    if (!colaboradorAtualizado) {
      return res.status(404).json({ message: 'Colaborador não encontrado' });
    }

    res.status(200).json(colaboradorAtualizado);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar colaborador', error });
  }
});

// DELETE - Excluir colaborador por ID
router.delete('/colaborador/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const colaboradorExcluido = await Colaborador.findByIdAndDelete(id);
    if (!colaboradorExcluido) {
      return res.status(404).json({ message: 'Colaborador não encontrado' });
    }

    res.status(200).json({ message: 'Colaborador excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir colaborador', error });
  }
});

// =====================================
// Rotas para EQUIPAMENTO
// =====================================

// GET - Buscar todos os equipamentos
router.get('/equipamento', async (req, res) => {
  try {
    const equipamentos = await Equipamento.find();
    res.status(200).json(equipamentos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar equipamentos', error });
  }
});

// POST - Criar novo equipamento
router.post('/equipamento', async (req, res) => {
  const { nome, numeroFrota, marca, tipoEquipamento, km, horimetro, statusOperacional } = req.body;
  const novoEquipamento = new Equipamento({ nome, numeroFrota, marca, tipoEquipamento, km, horimetro, statusOperacional });

  try {
    await novoEquipamento.save();
    res.status(201).json(novoEquipamento);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar equipamento', error });
  }
});

// PUT - Atualizar equipamento por ID
router.put('/equipamento/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, numeroFrota, marca, tipoEquipamento, km, horimetro, statusOperacional } = req.body;

  try {
    const equipamentoAtualizado = await Equipamento.findByIdAndUpdate(id, {
      nome, numeroFrota, marca, tipoEquipamento, km, horimetro, statusOperacional
    }, { new: true });
    
    if (!equipamentoAtualizado) {
      return res.status(404).json({ message: 'Equipamento não encontrado' });
    }

    res.status(200).json(equipamentoAtualizado);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar equipamento', error });
  }
});

// DELETE - Excluir equipamento por ID
router.delete('/equipamento/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const equipamentoExcluido = await Equipamento.findByIdAndDelete(id);
    if (!equipamentoExcluido) {
      return res.status(404).json({ message: 'Equipamento não encontrado' });
    }

    res.status(200).json({ message: 'Equipamento excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir equipamento', error });
  }
});

// =====================================
// Rotas para STATUS
// =====================================

// GET - Buscar todos os status
router.get('/status', async (req, res) => {
  try {
    const statusList = await Status.find();
    res.status(200).json(statusList);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar status', error });
  }
});

// POST - Criar novo status
router.post('/status', async (req, res) => {
  const { nomeColaborador, statusAtual, observacoes } = req.body;
  const novoStatus = new Status({ nomeColaborador, statusAtual, observacoes });

  try {
    await novoStatus.save();
    res.status(201).json(novoStatus);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar status', error });
  }
});

// PUT - Atualizar status por ID
router.put('/status/:id', async (req, res) => {
  const { id } = req.params;
  const { nomeColaborador, statusAtual, observacoes } = req.body;

  try {
    const statusAtualizado = await Status.findByIdAndUpdate(id, {
      nomeColaborador, statusAtual, observacoes
    }, { new: true });
    
    if (!statusAtualizado) {
      return res.status(404).json({ message: 'Status não encontrado' });
    }

    res.status(200).json(statusAtualizado);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar status', error });
  }
});

// DELETE - Excluir status por ID
router.delete('/status/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const statusExcluido = await Status.findByIdAndDelete(id);
    if (!statusExcluido) {
      return res.status(404).json({ message: 'Status não encontrado' });
    }

    res.status(200).json({ message: 'Status excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir status', error });
  }
});

// =====================================
// Rotas para USUÁRIO
// =====================================

// GET - Buscar todos os usuários
router.get('/usuario', async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuários', error });
  }
});

// POST - Criar novo usuário
router.post('/usuario', async (req, res) => {
  const { nome, email, senha, perfilAcesso } = req.body;
  const novoUsuario = new Usuario({ nome, email, senha, perfilAcesso });

  try {
    await novoUsuario.save();
    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar usuário', error });
  }
});

// PUT - Atualizar usuário por ID
router.put('/usuario/:id', async (req, res) => {
  const { id } = req.params;
  const { nome, email, senha, perfilAcesso } = req.body;

  try {
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(id, {
      nome, email, senha, perfilAcesso
    }, { new: true });
    
    if (!usuarioAtualizado) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    res.status(200).json(usuarioAtualizado);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar usuário', error });
  }
});

// DELETE - Excluir usuário por ID
router.delete('/usuario/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const usuarioExcluido = await Usuario.findByIdAndDelete(id);
    if (!usuarioExcluido) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    res.status(200).json({ message: 'Usuário excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao excluir usuário', error });
  }
});

module.exports = router;
