//No se optimiza con MEMO

import { createContext, useContext, useState, memo, useCallback } from 'react';

const Context = createContext();

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const increase = useCallback(() => setCounter((x) => x + 1), []);

  const decrease = useCallback(() => setCounter((x) => x - 1), []);

  return (
    <Context.Provider value={{ counter, increase, decrease }}>
      {children}
    </Context.Provider>
  );
};

const Label = () => {
  console.log('label');
  const { counter } = useContext(Context);
  return <h1>{counter}</h1>;
};

const Decrease = memo(() => {
  console.log('decrease');
  const { decrease } = useContext(Context);
  return <button onClick={decrease}>Decrease</button>;
});

const Increase = memo(() => {
  console.log('increase');
  const { increase } = useContext(Context);
  return <button onClick={increase}>Increase</button>;
});

const App = () => {
  return (
    <CounterProvider>
      <Label />
      <Decrease />
      <Increase />
    </CounterProvider>
  );
};

export default App;
