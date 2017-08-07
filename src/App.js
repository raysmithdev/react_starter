import React, { Component } from 'react';
import './App.css';
import AddTodo from './components/AddTodo'
import List from './components/List'

class App extends Component {

  constructor() {
    super()

    this.state = {
      todos: []
    }

    this.addTodo = this.addTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  addTodo() {
  }

  deleteToDo() {
  }

  render() { //return UI part
    return (
      <div className="App">
        <AddTodo addTodo={() => this.addTodo()} />
        <List todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
