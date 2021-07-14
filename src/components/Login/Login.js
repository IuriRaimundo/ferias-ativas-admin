import React, { useRef, useState } from 'react';
import './Login.css';
import { request } from '../../utils/request';
import Loading from '../Loading/Loading';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLoading, setIsLoading] = useState();
  const [feedback, setFeedback] = useState();

  // Sair da página login caso o utilizar tenha a sessão iniciada
  if (localStorage.getItem('token')) {
    window.location.href = '/dashboard';
  }

  const submitHandler = async (e) => {
    const body = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    request('POST', 'login', body, null)
      .then((response) => {
        // Armazenar token no navegador
        const now = new Date().getTime();
        localStorage.setItem('token', response.token);
        localStorage.setItem('setupTime', now);
        window.location.href = '/dashboard';
      })
      .catch((err) => {
        setFeedback(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className='login'>
      <form
        className='login-box-form'
        onSubmit={(e) => {
          e.preventDefault();
          setIsLoading(true);
          submitHandler(e);
        }}
      >
        <ul>
          <li>
            <label htmlFor='email'>Email</label>
            <input ref={emailRef} type='email' name='email' autoComplete='true' required />
          </li>
          <li>
            <label htmlFor='password'>Palavra-passe</label>
            <input ref={passwordRef} type='password' name='password' autoComplete='true' required />
          </li>
          <li>
            <button type='submit'>Iniciar sessão</button>
          </li>
          {feedback && <li className='auth-feedback'>{feedback}</li>}

          {isLoading && <Loading />}
        </ul>
      </form>
    </div>
  );
}
