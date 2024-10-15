import React, { useState } from 'react';
import './Login.css'; // Importando o arquivo CSS separado

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validação simples
    if (email === 'admin@appliz.com' && password === '123456') {
      alert('Login realizado com sucesso!');
    } else {
      alert('Email ou senha incorretos!');
    }
  };

  return (
    <div className="container">
      <h2 className="title">Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="inputGroup">
          <label className="label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label className="label">Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
          />
        </div>
        <button type="submit" className="button">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
