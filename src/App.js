import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementar, reduzir } from './store/contador';
import { login } from './store/login';
import { abrir, fechar } from './store/modal';

function App() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { contador, modal } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.login.user);

  function handleSubmit(event) {
    //p/ evitar refresh na página
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <div>
      <div>
        <button onClick={() => dispatch(abrir())}>Abrir</button>
        <button onClick={() => dispatch(fechar())}>Fechar</button>
      </div>
      {modal && <h1>Total: {contador.total} </h1>}
      <div>
        <button onClick={() => dispatch(incrementar())}>Incrementar</button>
        <button onClick={() => dispatch(reduzir())}>Reduzir</button>
      </div>

      <form action='' onSubmit={handleSubmit}>
        <label style={{ display: 'block' }} htmlFor='username'>
          Usuário
        </label>
        <input
          id='username'
          type='text'
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
        <label style={{ display: 'block' }} htmlFor='password'>
          Senha
        </label>
        <input
          id='password'
          type='text'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Enviar</button>
        <p>{data?.email}</p>
      </form>
    </div>
  );
}

export default App;
