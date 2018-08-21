import React from 'react'
import withLoading from '../hocs/withLoader'

const Todos = props =>
  <div>
    <h2>Todos!</h2>
    {
      props.initialData.map(todo =>
        <h3>{todo.title}</h3>
      )
    }
  </div>

Todos.defaultProps = {
  initialData: []
}

const dataLoader = async () => {
  // wait 3 seconds
  await new Promise(resolve => setTimeout(resolve, 3000))
  
  // return a promise with parsed JSON data
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(resp => resp.json())
}

export default withLoading(Todos, dataLoader)
