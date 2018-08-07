import React, { Component } from 'react'
import paintings from './paintings'
import Painting from './components/Painting'
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        {
          paintings.map(painting => <Painting painting={painting} />)
        }
      </div>
    )
  }
}

export default App
