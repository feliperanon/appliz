const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Conectar ao MongoDB Atlas (substitua pela sua URL de conexão do MongoDB Atlas)
mongoose.connect('mongodb+srv://feliperanon1990:u7MXKOmlWK82vuLQ@cluster0.y3kae.mongodb.net/appliz?retryWrites=true&w=majority', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

const app = express();
app.use(cors());
app.use(express.json()); // Para entender JSON

// Definindo o esquema do Colaborador
const colaboradorSchema = new mongoose.Schema({
  nome: String,
  funcao: String,
  telefone: String
});

const Colaborador = mongoose.model('Colaborador', colaboradorSchema);

// Rota POST para cadastrar colaboradores
app.post('/api/cadastro/colaborador', async (req, res) => {
  try {
    const novoColaborador = new Colaborador(req.body);
    await novoColaborador.save();
    res.status(201).send('Colaborador cadastrado com sucesso!');
  } catch (error) {
    res.status(400).send('Erro ao cadastrar colaborador');
  }
});

// Rota GET para listar todos os colaboradores
app.get('/api/cadastro/colaborador', async (req, res) => {
  try {
    const colaboradores = await Colaborador.find();
    res.status(200).json(colaboradores);
  } catch (error) {
    res.status(400).send('Erro ao listar colaboradores');
  }
});

// Rota PUT para atualizar colaborador por ID
app.put('/api/cadastro/colaborador/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const colaboradorAtualizado = await Colaborador.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!colaboradorAtualizado) {
      return res.status(404).send('Colaborador não encontrado');
    }

    res.status(200).send('Colaborador atualizado com sucesso!');
  } catch (error) {
    res.status(400).send('Erro ao atualizar colaborador');
  }
});

// Iniciar o servidor
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
