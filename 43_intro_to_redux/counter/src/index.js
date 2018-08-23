import { createStore } from 'redux'

// This is the brain of Redux,
// where we declare how the state will change.
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'UP':
      return state + 1
    case 'DOWN':
      return state - 1
    default:
      return state
  }
}

// We use the reducer above to create a store,
// essentially a global object that we can read from.
const store = createStore(reducer)

// Here I just get some elements from the DOM
const counter = document.querySelector('#counter')
const upButton = document.querySelector('#up')
const downButton = document.querySelector('#down')

// Subscribe takes a listener/callback,
// which gets called each time the store changes.
store.subscribe(() => { counter.innerHTML = store.getState() })

// Clicking on the + button
// Sends an *action* to the *store*.
upButton.addEventListener('click', () =>
  store.dispatch({ type: 'UP' })
)

// Same here, but with a different *action*.
downButton.addEventListener('click', () =>
  store.dispatch({ type: 'DOWN' })
)
