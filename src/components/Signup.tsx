import './styles/general.css';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div>
      <main>
        <h1>Cadastre-se</h1>
        <form>
          <input type="text" placeholder="Nome" required autoComplete="off" />
          <input type="email" placeholder="E-mail" required autoComplete="off" />
          <input type="password" placeholder="Senha" required autoComplete="off" />
          <input type="submit" value="Cadastrar" className="btn" />
        </form>
        <p className="sub-form-p">Já tem conta? <Link to="/">Clique aqui</Link></p>
      </main>
    </div>
  );
}

export default Signup;
