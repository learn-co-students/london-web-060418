import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import PaintingDetails from './components/PaintingDetails'
import PaintingList from './components/PaintingList'
import NavBar from './components/NavBar'
import paintings from './paintings'

class App extends Component {
  state = {
    paintings: paintings
  }

  render () {
    return (
      <div className='App'>
        <NavBar />
        <Link to='/paintings'>Painting List</Link>
        <Route
          exact
          path='/paintings' 
          component={() =>
            <PaintingList
              paintings={this.state.paintings}
            />
        } />
        <Switch>
          <Route
            exact
            path='/paintings/:id'
            component={(props) =>
              <PaintingDetails
                {...props}
                paintings={this.state.paintings}
              />
          } />
          <Route
            exact
            path='/paintings/:id'
            component={(props) =>
              <PaintingDetails
                {...props}
                paintings={this.state.paintings}
              />
          } />
        </Switch>
      </div>
    )
  }
}

export default App
