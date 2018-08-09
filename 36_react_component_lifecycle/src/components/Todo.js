import React from 'react'

class Todo extends React.Component {

  componentDidMount() {
    setTimeout(
      () => console.log(`Hey I'm "${this.props.todo.title}", I've just mounted!`),
      0 * this.props.index
    )
  }

  componentWillUnmount() {
    console.log('Why did you do this to me?!??')
  }

  render() {
    return (
      <div onClick={() => this.props.handleClick(this.props.todo.id)} className="todo-item">
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}
  

Todo.defaultProps = {
  todo: {title: "I'm a todo!"}
}

export default Todo
