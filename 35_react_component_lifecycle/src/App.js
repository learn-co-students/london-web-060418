import React, { Component } from 'react'

import Todo from './components/Todo'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(resp => resp.json())
      .then(todos => this.setState({ todos: todos }))
  }

  componentDidMount() {
    setTimeout(this.getTodos, 1000)
  }

  removeTodo = (id) => {
    const todos = [...this.state.todos]
    const filteredTodos = todos.filter(todo => todo.id !== id)
    this.setState({ todos: filteredTodos })
  }

  // shouldComponentUpdate() {
  //   return true
  // }

  render() {
    const todoElements = this.state.todos.map(
      (todo, index) =>
        <Todo
          todo={todo}
          index={index}
          handleClick={this.removeTodo}
        />
    )
    
    return (
      <div className="App">
        <h1>My (very fancyn't) Todo App</h1>
        { todoElements }
      </div>
    )
  }
}

export default App
