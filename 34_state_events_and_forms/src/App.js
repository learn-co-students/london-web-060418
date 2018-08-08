import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }



  handleChange = (event) => {
    console.log("Value: ", event.target.value)
    this.setState({ input: event.target.value }, () => console.log("State: ", this.state.input))
  }

  clearInputValue = () => {
    this.setState({input: ''})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input type="text" onChange={this.handleChange} value={this.state.input} />
        <a href={`https://www.google.co.uk/search?q=react+${this.state.input}`} onClick={() => setTimeout(this.clearInputValue, 10)} target="_blank" >TAKE ME THERE</a>
      </div>
    );
  }
}

export default App;
