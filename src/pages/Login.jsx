import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const senha = e.target.senha.value;
    alert(`Tentativa de login com:\nE-mail: ${email}`);
    // Aqui você faria a requisição para o backend
  };

  return (
    <div className="form-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" placeholder="Digite seu e-mail" required />
        
        <label htmlFor="senha">Senha</label>
        <input type="password" id="senha" name="senha" placeholder="Digite sua senha" required />
        
        <button type="submit">Entrar</button>
      </form>
      <div className="link">
        Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
      </div>
    </div>
  );
};

export default Login;
