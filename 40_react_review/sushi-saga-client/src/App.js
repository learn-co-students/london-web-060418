import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"
class App extends Component {

  state = {
    eaten: [],
    sushis: [],
    startingSushiIndex: 0,
    money: 100
  }

  getSushis = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => this.setState({ sushis }))
  }

  eatSushi = sushi => {
    if (this.state.money < sushi.price) return

    this.buySushi(sushi)
    const eaten = [...this.state.eaten, sushi]
    this.setState(
      { eaten },
      () => console.log(this.state.eaten)
    )
  }

  buySushi = sushi => {
    const price = sushi.price
    const currentMoney = this.state.money
    const newMoneyAmount = price > currentMoney ? currentMoney : currentMoney - price 
    this.setState({ money: newMoneyAmount })
  }

  incrementButtonCounter = () => {
    this.setState({ startingSushiIndex: this.state.startingSushiIndex + 4 })
  }

  componentDidMount() {
    this.getSushis()
  }

  render() {
    const { sushis, eaten, startingSushiIndex, money } = this.state
    return (
      <div className="app">
        <SushiContainer
          sushis={sushis}
          eatSushi={this.eatSushi}
          eaten={eaten}
          incrementButtonCounter={this.incrementButtonCounter}
          startingSushiIndex={startingSushiIndex}
        />
        <Table money={money} eaten={eaten} />
      </div>
    );
  }
}

export default App;