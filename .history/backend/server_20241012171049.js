const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Conectar ao MongoDB Atlas usando variáveis de ambiente para segurança
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(cors());
app.use(express.json()); // Para lidar com JSON no body da requisição

// Importar as rotas
const cadastroRoutes = require('./routes/cadastroRoutes');
app.use('/api/cadastro', cadastroRoutes);

// Iniciar o servidor
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
