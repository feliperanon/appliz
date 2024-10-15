const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Conectar ao MongoDB Atlas
mongoose.connect('mongodb+srv://feliperanon1990:rffEpOCQGDwMoAUf@cluster0.mongodb.net/appliz?retryWrites=true&w=majority', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

const app = express();
app.use(cors());
app.use(express.json()); // Para entender JSON

// Definir os esquemas e modelos para os dados de cadastro
const colaboradorSchema = new mongoose.Schema({
  nome: String,
  funcao: String,
  telefone: String,
  ativo: { type: Boolean, default: true } // Campo para desativar o cadastro
});

const clienteSchema = new mongoose.Schema({
  nome: String,
  endereco: String,
  latitude: String,
  longitude: String,
  ativo: { type: Boolean, default: true }
});

const equipamentoSchema = new mongoose.Schema({
  nome: String,
  numeroFrota: String,
  marca: String,
  tipoEquipamento: String,
  km: String,
  horimetro: String,
  ativo: { type: Boolean, default: true }
});

const statusSchema = new mongoose.Schema({
  statusOperacional: String,
  ativo: { type: Boolean, default: true }
});

const usuarioSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  senha: String,
  ativo: { type: Boolean, default: true }
});

const Colaborador = mongoose.model('Colaborador', colaboradorSchema);
const Cliente = mongoose.model('Cliente', clienteSchema);
const Equipamento = mongoose.model('Equipamento', equipamentoSchema);
const Status = mongoose.model('Status', statusSchema);
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Função para verificar duplicidade de usuários
const verificarDuplicidadeUsuario = async (email) => {
  const usuarioExistente = await Usuario.findOne({ email });
  return usuarioExistente;
};

// Rotas para listar cadastros
app.get('/api/cadastro/colaborador', async (req, res) => {
  const colaboradores = await Colaborador.find({ ativo: true });
  res.json(colaboradores);
});

app.get('/api/cadastro/cliente', async (req, res) => {
  const clientes = await Cliente.find({ ativo: true });
  res.json(clientes);
});

app.get('/api/cadastro/equipamento', async (req, res) => {
  const equipamentos = await Equipamento.find({ ativo: true });
  res.json(equipamentos);
});

app.get('/api/cadastro/status', async (req, res) => {
  const status = await Status.find({ ativo: true });
  res.json(status);
});

app.get('/api/cadastro/usuario', async (req, res) => {
  const usuarios = await Usuario.find({ ativo: true });
  res.json(usuarios);
});

// Rotas para criar cadastros
app.post('/api/cadastro/colaborador', async (req, res) => {
  try {
    const novoColaborador = new Colaborador(req.body);
    await novoColaborador.save();
    res.status(201).send('Colaborador cadastrado com sucesso!');
  } catch (error) {
    res.status(400).send('Erro ao cadastrar colaborador');
  }
});

app.post('/api/cadastro/cliente', async (req, res) => {
  try {
    const novoCliente = new Cliente(req.body);
    await novoCliente.save();
    res.status(201).send('Cliente cadastrado com sucesso!');
  } catch (error) {
    res.status(400).send('Erro ao cadastrar cliente');
  }
});

app.post('/api/cadastro/equipamento', async (req, res) => {
  try {
    const novoEquipamento = new Equipamento(req.body);
    await novoEquipamento.save();
    res.status(201).send('Equipamento cadastrado com sucesso!');
  } catch (error) {
    res.status(400).send('Erro ao cadastrar equipamento');
  }
});

app.post('/api/cadastro/status', async (req, res) => {
  try {
    const novoStatus = new Status(req.body);
    await novoStatus.save();
    res.status(201).send('Status cadastrado com sucesso!');
  } catch (error) {
    res.status(400).send('Erro ao cadastrar status');
  }
});

app.post('/api/cadastro/usuario', async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuarioExistente = await verificarDuplicidadeUsuario(email);
    if (usuarioExistente) {
      return res.status(400).send('Usuário já existe');
    }
    const novoUsuario = new Usuario({ email, senha });
    await novoUsuario.save();
    res.status(201).send('Usuário cadastrado com sucesso!');
  } catch (error) {
    res.status(400).send('Erro ao cadastrar usuário');
  }
});

// Rotas para alterar cadastros
app.put('/api/cadastro/colaborador/:id', async (req, res) => {
  try {
    const colaborador = await Colaborador.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(colaborador);
  } catch (error) {
    res.status(400).send('Erro ao atualizar colaborador');
  }
});

app.put('/api/cadastro/cliente/:id', async (req, res) => {
  try {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(cliente);
  } catch (error) {
    res.status(400).send('Erro ao atualizar cliente');
  }
});

app.put('/api/cadastro/equipamento/:id', async (req, res) => {
  try {
    const equipamento = await Equipamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(equipamento);
  } catch (error) {
    res.status(400).send('Erro ao atualizar equipamento');
  }
});

app.put('/api/cadastro/status/:id', async (req, res) => {
  try {
    const status = await Status.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(status);
  } catch (error) {
    res.status(400).send('Erro ao atualizar status');
  }
});

app.put('/api/cadastro/usuario/:id', async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(usuario);
  } catch (error) {
    res.status(400).send('Erro ao atualizar usuário');
  }
});

// Rotas para desativar cadastros (lógica de soft delete)
app.delete('/api/cadastro/colaborador/:id', async (req, res) => {
  try {
    await Colaborador.findByIdAndUpdate(req.params.id, { ativo: false });
    res.send('Colaborador desativado com sucesso!');
  } catch (error) {
    res.status(400).send('Erro ao desativar colaborador');
  }
});

app.delete('/api/cadastro/cliente/:id', async (req, res) => {
  try {
    await Cliente.findByIdAndUpdate(req.params.id, { ativo: false });
    res.send('Cliente desativado com sucesso!');
  } catch (error) {
    res.status(400).send('Erro ao desativar cliente');
  }
});

app.delete('/api/cadastro/equipamento/:id', async (req, res) => {
  try {
    await Equipamento.findByIdAndUpdate(req.params.id, { ativo: false });
    res.send('Equipamento desativado com sucesso!');
  } catch (error) {
    res.status(400).send('Erro ao desativar equipamento');
  }
});

app.delete('/api/cadastro/status/:id', async (req, res) => {
  try {
    await Status.findByIdAndUpdate(req.params.id, { ativo: false });
    res.send('Status desativado com sucesso!');
  } catch (error) {
    res.status(400).send('Erro ao desativar status');
  }
});

app.delete('/api/cadastro/usuario/:id', async (req, res) => {
  try {
    await Usuario.findByIdAndUpdate(req.params.id, { ativo: false });
    res.send('Usuário desativado com sucesso!');
  } catch (error) {
    res.status(400).send('Erro ao desativar usuário');
  }
});

// Iniciar o servidor
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
