import React from 'react';

const Cadastro = () => {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-6 color2 p-4 rounded shadow">
        <h2 className="text-primary text-center">Cadastro (Central de Dados)</h2>
        <form>
          <div className="form-group mb-3">
            <label>Nome</label>
            <input type="text" className="form-control" placeholder="Digite o nome" />
          </div>
          <div className="form-group mb-3">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Digite o email" />
          </div>
          <div className="form-group mb-3">
            <label>Telefone</label>
            <input type="tel" className="form-control" placeholder="Digite o telefone" />
          </div>
          <button type="submit" className="btn btn-dark w-100">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
