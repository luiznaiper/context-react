import { createContext, useContext, useState } from 'react';

const Context = createContext({ value: false, toggle: () => {} });

const Provider = ({ children }) => {
  const [value, setValue] = useState(false);
  const myValue = {
    value,
    toggle: () => setValue(!value),
  };
  return <Context.Provider value={myValue}>{children}</Context.Provider>;
};

const Content = () => {
  const { value, toggle } = useContext(Context);
  return (
    <div>
      <label>{value.toString()}</label>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

function App() {
  return (
    <Provider>
      <Content />
    </Provider>
  );
}

export default App;
