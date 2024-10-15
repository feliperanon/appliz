const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const cadastroRoutes = require('./routes/cadastroRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado ao MongoDB Atlas');
}).catch((error) => {
  console.error('Erro ao conectar ao MongoDB:', error);
});

app.use('/api/cadastro', cadastroRoutes);

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
