import React from 'react'

class Planet extends React.Component {
  render(){
    return (
      <div style={{border: "solid", backgroundColor: "teal"}}>
        <img height="300px" src={this.props.planet.image} />
        <h3>{this.props.planet.name}</h3>
        <p>Diameter: {this.props.planet.diameter}</p>
        <p>Climate: {this.props.planet.climate}</p>
        <p>{this.props.planet.tectonic_activity ? "Tectonic" : "Non-Tectonic"}</p>
      </div>
    )
  }
}

export default Planet