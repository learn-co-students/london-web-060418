import React, { Component } from 'react'

import withName from './hocs/classWithName'
import Title from './components/Title'
import Todos from './components/Todos'
import './App.css'

const TitleWithName = withName(Title, "Hugo")

class App extends Component {
  state = {
    name: 'React'
  }

  render() {
    return (
      <div>
        <h1>Higher-order Components!</h1>
        <TitleWithName />
        <Todos />
      </div>
    )
  }
}

export default App
