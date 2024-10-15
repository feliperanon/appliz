import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cadastro from './components/Cadastro';
// ... outros componentes ...

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Adicionando estado para controlar o carregamento
  const [error, setError] = useState(null); // Adicionando estado para controlar erros

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Simulando uma verificação de autenticação assíncrona (ex: validar token com o servidor)
        const token = localStorage.getItem('token');
        if (token) {
          // await validarToken(token); // Substitua por sua lógica de validação de token
          setIsAuthenticated(true);
        }
      } catch (err) {
        setError(err); // Capturando erro durante a autenticação
      } finally {
        setLoading(false); // Finalizando o carregamento
      }
    };

    checkAuthentication();
  }, []);

  const handleLogin = async (username, password) => {
    try {
      setLoading(true); // Iniciando o carregamento
      // Simulando uma requisição de login assíncrona
      // await login(username, password); // Substitua por sua lógica de login
      localStorage.setItem('token', 'seuTokenAqui'); // Substitua 'seuTokenAqui' pelo token real
      setIsAuthenticated(true);
      setError(null); // Limpando erros anteriores
    } catch (err) {
      setError(err); // Capturando erro durante o login
    } finally {
      setLoading(false); // Finalizando o carregamento
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  if (loading) {
    return <div>Carregando...</div>; // Exibindo mensagem de carregamento
  }

  if (error) {
    return <div>Erro: {error.message}</div>; // Exibindo mensagem de erro
  }

  return (
    <Router>
      <div>
        {/* Mostrar Navbar apenas quando autenticado, com a função de logout */}
        {isAuthenticated && <Navbar onLogout={handleLogout} />}

        <Routes>
          {/* Rota para a página de login */}
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />

          {/* Rota principal - redireciona para login ou cadastro */}
          <Route
            path="/"
            element={isAuthenticated ? <Navigate to="/cadastro" /> : <Navigate to="/login" />}
          />

          {/* Rotas protegidas - Redireciona para /login se não estiver autenticado */}
          <Route
            path="/cadastro"
            element={isAuthenticated ? <Cadastro /> : <Navigate to="/login" />}
          />
          {/* ... outras rotas protegidas ... */}
        </Routes>
      </div>
    </Router>
  );
};

// Componente Login com redirecionamento após login
const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    try {
      await onLogin(username, password); // Chama a função handleLogin do App
      navigate('/cadastro'); // Redireciona para a página /cadastro após o login
    } catch (err) {
      // Lidar com o erro de login (ex: exibir mensagem de erro)
      console.error('Erro durante o login:', err);
    }
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      {/* ... seus inputs de username e password ... */}
      <button type="submit">Entrar</button>
    </form>
  );
};

export default App;