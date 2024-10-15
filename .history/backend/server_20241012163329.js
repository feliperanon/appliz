const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Conectar ao MongoDB Atlas (substitua pela sua URL de conexão do MongoDB Atlas)
mongoose.connect('mongodb+srv://feliperanon1990:rffEpOCQGDwMoAUf@cluster0.mongodb.net/appliz?retryWrites=true&w=majority', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

const app = express();
app.use(cors());
app.use(express.json()); // Para entender JSON

// Importar as rotas de cadastro
const cadastroRoutes = require('./routes/cadastroRoutes');
app.use('/api/cadastro', cadastroRoutes);

// Iniciar o servidor
app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
