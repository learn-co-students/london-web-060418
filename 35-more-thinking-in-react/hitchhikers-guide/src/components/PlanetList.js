import React from 'react'
import Planet from './Planet'

// let testPlanet = {
//    id: 1,
//    name: "Alpha Centauri Prime III",
//    image: "https://d1o50x50snmhul.cloudfront.net/wp-content/uploads/2017/06/21180000/planet-10-orange-blue-final-small-800x533.jpg",
//    diameter: 10000,
//    tectonic_activity: true,
//    climate: "Volcanic"
//  }

class PlanetList extends React.Component{


  render(){

    let renderedPlanets = this.props.planets.map((planet) => {
      return <Planet planet={planet}/>
    })

    return (
      <div>
        {renderedPlanets}
      </div>
    )
  }
}

export default PlanetList