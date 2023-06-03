import './styles/general.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
      <main>
        <h1>Entrar</h1>
        <form>
          <input type="email" placeholder="E-mail" required autoComplete="off" />
          <input type="password" placeholder="Senha" required autoComplete="off" />
          <input type="submit" value="Cadastrar" className="btn" />
        </form>
        <p className="sub-form-p">Ainda não tem conta? <Link to="/signup">Clique aqui</Link></p>
      </main>
    </div>
  );
}

export default Login;
