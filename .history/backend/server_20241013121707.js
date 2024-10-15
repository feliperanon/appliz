const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Para utilizar as variáveis de ambiente
const path = require('path'); // Importe o módulo path

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Conectado ao MongoDB Atlas'))
  .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

// Importar rotas
const colaboradorRoutes = require('./routes/colaboradorRoutes');
app.use('/api/colaboradores', colaboradorRoutes);

// Configurar para servir os arquivos estáticos do React (pasta 'build')
app.use(express.static(path.join(__dirname, 'build'))); 

// Redirecionar todas as rotas para o index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});