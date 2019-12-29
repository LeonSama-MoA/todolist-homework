import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
//import './App.css';
import './bootstrap/bootstrap.css'

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.completeTask = this.completeTask.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: this.state.items.length + 1,
      createDate: Date.now(),
      completed: false
    }

    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  completeTask(e) {
    this.setState(state => ({
      items: state.items.completed = true
    }))
  }

  render() {
    return (
      <div>
        <h3>Len: {this.state.items.length}</h3>
        <div class="container" style={{marginTop: 1 + 'em'}}>
          <form onSubmit={this.handleSubmit}>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="ToDo task" id="new-todo" onChange={this.handleChange} value={this.state.text}></input>
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="submit" id="button-addon2">Submit #{this.state.items.length + 1}</button>
              </div>
            </div>
          </form>
          <DrawTable items={this.state.items} />
        </div>
      
      </div>
    );
    //if (this.state.items.length === 0) {
    //   <h1>ToDo List is empty</h1>
    //}
  }
}

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

class DrawTable extends React.Component {
  //constructor(props) {
  //  super(props);
    //this.completeTask = this.completeTask.bind(this);
  //}

  //completeTask(e) {
  //  e.preventDefault();
  //  this.completed = true;
  //}

  render () {
    if (!this.props.items.length) {
      return <h1>ToDo List is empty.</h1>
    } else {
      return (
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col" style={{width: 100}}>#</th>
              <th scope="col">Task</th>
              <th scope="col" style={{width: 200}}>Complete</th>
            </tr>
          </thead>
          <tbody>
              {this.props.items.map(item => (
                <tr key={item.id}>
                  <th >{item.id}</th>
                  <td >{item.completed ? <strike>{item.text}</strike> : item.text}</td>
                  <td >{item.completed ? <CompletedButton /> : <CompleteButton onClick={console.log("clicked")} />}</td>
                </tr>
                
              ))}
          </tbody>
        </table>
        //<h1>ToDo List length is: {this.props.items.length}.</h1>
      )
    }
  }
}

function CompleteButton(props) {
  return (
    <button type="button" class="btn btn-outline-primary" onClick={props.onClick}>
      Complete
    </button>
  );
}

function CompletedButton() {
  return (
    <button type="button" class="btn btn-secondary btn-lg" disabled>
      Completed
    </button>
  );
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

