const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Conectar ao MongoDB (substitua pela sua URL de conexão MongoDB)
mongoose.connect('mongodb://localhost:27017/appliz', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(cors());
app.use(express.json()); // Para entender JSON

// Definir o esquema e modelo para os dados de cadastro
const cadastroSchema = new mongoose.Schema({
  nome: String,
  funcao: String,
  telefone: String,
  endereco: String,
  numeroFrota: String,
  marca: String,
  tipoEquipamento: String,
  km: String,
  horimetro: String,
  statusOperacional: String,
  latitude: String,
  longitude: String
});

const Cadastro = mongoose.model('Cadastro', cadastroSchema);

// Rota para criar um novo cadastro
app.post('/api/cadastro', async (req, res) => {
  try {
    const novoCadastro = new Cadastro(req.body);
    await novoCadastro.save();
    res.status(201).send('Cadastro realizado com sucesso!');
  } catch (error) {
    res.status(400).send('Erro ao realizar cadastro');
  }
});

// Iniciar o servidor
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
