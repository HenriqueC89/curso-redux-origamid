import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Content from './Components/Content';
import Header from './Components/Header';
import { incrementar, reduzir, somar } from './store/contador';
import { abrir, fechar } from './store/modal';
import './App.css';

function App() {
  const { contador, modal } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <div>
        <button onClick={() => dispatch(abrir())}>Abrir</button>
        <button onClick={() => dispatch(fechar())}>Fechar</button>
      </div>
      {modal && <h1>Total: {contador.total} </h1>}
      <div>
        <button onClick={() => dispatch(incrementar())}>Incrementar</button>
        <button onClick={() => dispatch(reduzir())}>Reduzir</button>
        <button onClick={() => dispatch(somar(5))}>
          Somar (usando 'prepare')
        </button>
      </div>
      <div>
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
