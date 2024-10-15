const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env

// Conectar ao MongoDB Atlas usando a URL de conexão do .env
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado ao MongoDB Atlas');
}).catch((error) => {
  console.error('Erro ao conectar ao MongoDB:', error);
});

const app = express();
app.use(cors());
app.use(express.json());

const cadastroRoutes = require('./routes/cadastroRoutes');
app.use('/api/cadastro', cadastroRoutes);

// Porta do servidor
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
