import React from 'react'

class NewPlanetForm extends React.Component {

  state = {
    name: "",
    image: "",
    diameter: 0,
    tectonic_activity: false,
    climate: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCheck = (event) => {
    this.setState({
      tectonic_activity: !this.state.tectonic_activity
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addPlanet(this.state)
  }

  render(){
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label for="name">Name: </label>
          <input type="text" name="name" onChange={this.handleChange}/>

          <label for="image">Image: </label>
          <input type="text" name="image" onChange={this.handleChange}/>

          <label for="diameter">Diameter: </label>
          <input type="number" name="diameter" onChange={this.handleChange}/>

          <label for="tectonic_activity">Tectonic Activity: </label>
          <input 
                type="checkbox" 
                name="tectonic_activity"
                checked={this.state.tectonic_activity} 
                onClick={this.handleCheck}/>

          <label for="climate">Climate: </label>
          <input type="text" name="climate" onChange={this.handleChange}/>

          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default NewPlanetForm