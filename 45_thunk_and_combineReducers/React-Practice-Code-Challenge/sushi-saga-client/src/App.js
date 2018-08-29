import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import { connect } from 'react-redux'
import { getAllSushis } from './actions'

class App extends Component {

  state = {
    sushis: [],
    eaten: [],
    cost: 0,
    budget: 100,
    display: 0,
    loading: true
  }

  componentDidMount(){
    // fetch(API)
    // .then(res => res.json())
    // .then((res) => {
    //  this.setState({
    //    sushis: res
    //  })
    // })

    this.props.getAllSushis()
    .then(()=> {
      this.setState({
        loading: false
      })
    })
  }

  // eat = (sushi) => {
  //  const newCost = this.state.cost + sushi.price

  //  if (!this.state.eaten.includes(sushi) && newCost <= this.state.budget ) {
  //    this.setState({
  //      eaten: [...this.state.eaten, sushi],
  //      cost: newCost
  //    })
  //  }
  // }

  chooseFourSushis = () => {
    return this.props.sushis.slice(this.state.display, this.state.display+4)
  }

  more = (event) => {
    this.setState({
      display: this.state.display + 4
    })
  }

  render() {
    // console.log("APP PROPS", this.props)
    // console.log("APP STATE", this.state)
    return (
      <div className="app">
        <SushiContainer sushis={this.chooseFourSushis()} 
                        more={this.more}
                        eaten={this.props.eatenREDUX} />
        <Table remainingBudget={this.state.budget - this.state.cost} 
               />
      </div>
    );
  }
}

  // state = {
  //  sushis: [],
  //  eaten: [],
  //  cost: 0,
  //  budget: 100,
  //  display: 0,
  // }

const mapStateToProps = (state) => {
  console.log("APP MSP", state)
  return {
    sushis: state.sushi.sushis,
    eatenREDUX: state.sushi.eaten,
    // input: state.input
  }
}

// function mapDispatchToProps (dispatch){
//  return {
//    getSushis: () => getAllSushis(dispatch)
//  }
// }



export default connect(mapStateToProps, { getAllSushis })(App);
