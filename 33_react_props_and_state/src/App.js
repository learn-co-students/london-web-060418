import React, { Component } from 'react'

import PaintingDetails from './components/PaintingDetails'
import PaintingList from './components/PaintingList'
import NavBar from './components/NavBar'

class App extends Component {
  state = {
    selectedPainting: undefined
  }

  selectPainting = painting => {
    this.setState({ selectedPainting: painting })
  }

  clearSelectedPainting = () => {
    this.setState({ selectedPainting: undefined })
  }

  render () {
    return (
      <div className='App'>
        <NavBar />
        {
          this.state.selectedPainting !== undefined ?
            <PaintingDetails painting={this.state.selectedPainting} handleClick={this.clearSelectedPainting} /> :
            <PaintingList anotherProp="test" selectPainting={this.selectPainting} />
        }
      </div>
    )
  }
}

export default App
