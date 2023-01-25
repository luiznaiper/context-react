import { Component, createContext } from 'react';

const Context = createContext('mi value');

const Provider = ({ children }) => {
  return <Context.Provider value={'other value'}>{children}</Context.Provider>;
};

class MyComponent extends Component {
  //   static contextType = Context;
  render() {
    console.log(this.context);
    return <div>Hello wuorldddd</div>;
  }
}

MyComponent.contextType = Context;

const App = () => {
  return (
    <Provider>
      <MyComponent />
      <Context.Consumer>{(value) => <div>{value}</div>}</Context.Consumer>
    </Provider>
  );
};
export default App;
