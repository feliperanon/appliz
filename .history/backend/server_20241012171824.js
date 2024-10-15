const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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
