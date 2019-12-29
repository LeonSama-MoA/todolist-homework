import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
//import './App.css';
import './bootstrap/bootstrap.css'
import ToDoApp from "./ToDo.js"

class HelloWorld extends React.Component {
  render() {
    return (
      <div>Hello, World!</div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <ToDoApp />
    )
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

