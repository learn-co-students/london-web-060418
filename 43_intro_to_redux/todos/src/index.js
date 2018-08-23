import { createStore } from 'redux'

// This is the brain of Redux,
// where we declare how the state will change.
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newTodo = action.payload
      return [...state, newTodo]
    case 'REMOVE_TODO':
      return state.slice(0, -1)
    default:
      return state
  }
}

// We use the reducer above to create a store,
// essentially a global object that we can read from.
const store = createStore(reducer)

// Here I just get some elements from the DOM
const todoList = document.querySelector('#todoList')
const addButton = document.querySelector('#addButton')
const removeButton = document.querySelector('#removeButton')

// This function creates a <li> for each todo given
// and adds them all to the <ul> on the page.
const updateTodos = todos => {
  const todoElements = todos
    .map(todo => `<li>${todo}</li>`)
    .join('')

  todoList.innerHTML = todoElements
}

// Subscribe takes a listener/callback,
// which gets called each time the store changes.
store.subscribe(() => {
  const todos = store.getState()

  console.log('State: ', todos)
  updateTodos(todos)
})

// Clicking on the ADD TODO button
// Sends an *action* to the *store*
addButton.addEventListener('click', () =>
  store.dispatch({ type: 'ADD_TODO', payload: 'New todo!' })
)

// Same here, but the action type is different
removeButton.addEventListener('click', () =>
  store.dispatch({ type: 'REMOVE_TODO' })
)
