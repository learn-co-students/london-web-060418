import React, { Component } from 'react';
import './App.css';
import planets from './data/planets'
import PlanetList from './components/PlanetList'
import NewPlanetForm from './components/NewPlanetForm'
import Filter from './components/Filter'

class App extends Component {

  state = {
    planets: planets,
    filterTerm: "",
  }

  addPlanet = (planet) => {
    this.setState({
      planets: [...this.state.planets, planet]
    })
  }

 	changeFilter = (event) => {
 		this.setState({
 			filterTerm: event.target.value
 		})
 	}


  render() {
  	let filteredPlanets = this.state.planets

  	if (this.state.filterTerm) {
	  	filteredPlanets = this.state.planets.filter((planet) => {
	  		return planet.name.toLowerCase().includes(this.state.filterTerm.toLowerCase())
	  	})
  	}

    return (
      <div className="App">
      	<Filter changeFilter={this.changeFilter} filterTerm={this.state.filterTerm}/>
        <PlanetList planets={filteredPlanets} />
        <NewPlanetForm addPlanet={this.addPlanet} />
      </div>
    );
  }
}

export default App;
