const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Substitua a senha na string de conexão com MongoDB
mongoose.connect('mongodb+srv://feliperanon1990:u7MXKOmlWK82vuLQ@cluster0.y3kae.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

const app = express();
app.use(cors());
app.use(express.json()); // Para entender JSON

// Defina suas rotas aqui

// Iniciar o servidor
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
