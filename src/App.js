import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
//import './App.css';
import './bootstrap/bootstrap.css'
import ToDoApp from "./ToDo.js"
export default App;

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

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

