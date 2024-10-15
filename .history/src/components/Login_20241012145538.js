import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === 'admin@appliz.com' && password === '123456') {
      alert('Login realizado com sucesso!');
      onLogin(); // Chama a função para autenticar o usuário
    } else {
      alert('Email ou senha incorretos!');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-4 color1 p-4 rounded shadow">
        <h2 className="text-center text-primary">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu email"
            />
          </div>
          <div className="form-group mb-3">
            <label>Senha</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
