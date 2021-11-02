import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/login';
import styles from './Login.module.css';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.login.user);

  function handleSubmit(event) {
    //p/ evitar refresh na página
    event.preventDefault();
    dispatch(login({ username, password }));
  }
  return (
    <>
      <form className='anime' action='' onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor='username'>
          Usuário
        </label>
        <input
          className={styles.input}
          id='username'
          type='text'
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <label className={styles.label} htmlFor='password'>
          Senha
        </label>
        <input
          className={styles.input}
          id='password'
          type='password'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button className={styles.button}>Enviar</button>
      </form>
      <p>{data?.email}</p>
    </>
  );
};

export default Login;
