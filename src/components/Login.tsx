import './styles/general.css';
import { Link } from 'react-router-dom';
import MyPrimarySubmitButton from './styling/MyPrimarySubmitButton';

function Login() {
  return (
    <main>
      <h1>Entrar</h1>
      <form>
        <input type="email" placeholder="E-mail" required autoComplete="off" />
        <input type="password" placeholder="Senha" required autoComplete="off" />
        <MyPrimarySubmitButton value="Entrar"/>
      </form>
      <p className="sub-form-p">Ainda não tem conta? <Link to="/signup">Clique aqui</Link></p>
    </main>
  );
}

export default Login;
