import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterContainer from './characters/CharacterContainer'
import CharacterDetail from './characters/CharacterDetail'
import { makeCharacterFetch } from './adapter/api'

class App extends Component {
  state = {
    characters: []
  }

  componentDidMount() {
    //did some fetch state stuffs
    makeCharacterFetch().then(characters => {
      this.setState({
        characters //key: characters, value: value of the variable characters
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Chocolate Frogs App yay</h1>
        <CharacterContainer characters={this.state.characters} color='blue' />
      </div>
    );
  }
}

export default App;
