const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Conectar ao MongoDB (substitua pela sua URL de conexão MongoDB)
mongoose.connect('mongodb://localhost:27017/appliz', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(cors());
app.use(express.json()); // Para entender JSON

// Definir os esquemas e modelos para os dados de cadastro
const colaboradorSchema = new mongoose.Schema({
  nome: String,
  funcao: String,
  telefone: String
});

const clienteSchema = new mongoose.Schema({
  nome: String,
  endereco: String,
  latitude: String,
  longitude: String
});

const equipamentoSchema = new mongoose.Schema({
  nome: String,
  numeroFrota: String,
  marca: String,
  tipoEquipamento: String,
  km: String,
  horimetro: String
});

const statusSchema = new mongoose.Schema({
  statusOperacional: String
});

const usuarioSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  senha: String
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

    // Verificar se o usuário já existe
    const usuarioExistente = await verificarDuplicidadeUsuario(email);
    if (usuarioExistente) {
      return res.status(400).send('Usuário já existe');
    }

    // Cadastrar novo usuário
    const novoUsuario = new Usuario({ email, senha });
    await novoUsuario.save();
    res.status(201).send('Usuário cadastrado com sucesso!');
  } catch (error) {
    res.status(400).send('Erro ao cadastrar usuário');
  }
});

// Iniciar o servidor
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
