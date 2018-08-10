import React from 'react'
import CharacterList from './CharacterList'
import CharacterFilter from './CharacterFilter'

class CharacterContainer extends React.Component {
  state = {
    filter: {
      name: ''
    }
  }

  onFilterNameChange = (e) => {
    this.setState({
      filter: {
        ...this.state.filter,
        name: e.target.value
      }
    })
  }

  onFilterMinistryChange = (e) => {
    this.setState({
      filter: {
        ...this.state.filter,
        ministry: e.target.checked
      }
    })
  }

  onFilterDeathEaterChange = (e) => {
    this.setState({
      filter: {
        ...this.state.filter,
        deathEater: e.target.checked
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <CharacterFilter onFilterNameChange={this.onFilterNameChange} onFilterMinistryChange={this.onFilterMinistryChange} onFilterDeathEaterChange={this.onFilterDeathEaterChange} />
        <CharacterList {...this.props} {...this.state.filter} />
      </React.Fragment>
    )
  }
}

export default CharacterContainer
