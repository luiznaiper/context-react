import { Component, createContext, useContext } from 'react';

const Context1 = createContext('mi value 1');
const Context2 = createContext('mi value 2');

const Provider = ({ children }) => {
  return (
    <Context1.Provider value={'other value 1'}>
      <Context2.Provider value={'other value 2'}>{children}</Context2.Provider>
    </Context1.Provider>
  );
};

class MyComponent extends Component {
  render() {
    return (
      <Context1.Consumer>
        {(value1) => (
          <Context2.Consumer>
            {(value2) => <div>{`${value1} ${value2}`} </div>}
          </Context2.Consumer>
        )}
      </Context1.Consumer>
    );
  }
}

const MyComponent2 = () => {
  const value1 = useContext(Context1);
  const value2 = useContext(Context2);
  return <div>{`${value1}  ${value2}`}</div>;
};

const App = () => {
  return (
    <Provider>
      <MyComponent />
      <MyComponent2 />
    </Provider>
  );
};
export default App;
