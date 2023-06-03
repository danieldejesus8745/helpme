import { ChangeEvent, FormEvent, useState } from 'react';
// import './styles/general.css';
import { Link } from 'react-router-dom';
import MyPrimarySubmitButton from './styling/MyComponents/MyPrimarySubmitButton';
import 

function Signup() {
  const [userData, setUserData] = useState<UserData>({
    name: '',
    email: '',
    password: ''
  });
  const url = 'http://localhost:8080/api/v1/users';

  function updateNameState(value: string) {
    setUserData({...userData, name: value});
  }

  function updateEmailState(value: string) {
    setUserData({...userData, email: value});
  }

  function updatePasswordState(value: string) {
    setUserData({...userData, password: value});
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (response.status === 200) {
        alert('Usuário cadastrado com sucesso');
      }
    })
  }

  return (
    <main>
      <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={
            (e: ChangeEvent<HTMLInputElement>) => {
              updateNameState(e?.target?.value)
            }
          }
          placeholder="Nome"
          required
          autoComplete="off"
        />
        <input
          type="email"
          onChange={
            (e: ChangeEvent<HTMLInputElement>) => {
              updateEmailState(e?.target?.value)
            }
          }
          placeholder="E-mail"
          required
          autoComplete="off"
        />
        <input
          type="password"
          onChange={
            (e: ChangeEvent<HTMLInputElement>) => {
              updatePasswordState(e?.target?.value)
            }
          }
          placeholder="Senha"
          required
          autoComplete="off"
        />

        <MyPrimarySubmitButton value="Cadastrar" />
      </form>
      <p className="sub-form-p">Já tem conta? <Link to="/">Clique aqui</Link></p>
    </main>
  );
}

interface UserData {
  name: string;
  email: string;
  password: string;
}

export default Signup;
