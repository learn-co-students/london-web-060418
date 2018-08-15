import React, { Fragment } from 'react'
import PokemonList from './PokemonList'
import PokemonFilter from './PokemonFilter'
import { Route, Switch } from 'react-router-dom'
import PokemonDetails from './PokemonDetails'
import { makePokemonRequest, getUserPokemon, setUserPokemon } from '../adapter/adapter'

import MyTeam from './MyTeam'

class PokemonContainer extends React.Component {
  state = {
    input: '',
    pokemon: [],
    team: [],
    previouslySeenUser: null
  }

  componentDidMount() {
    makePokemonRequest().then(pokemonData => {
      this.setState({
        pokemon: pokemonData
      })
    })
  }

  makeTeamFetch = () => {
    if (this.props.user && this.props.user !== this.state.previouslySeenUser) {
      getUserPokemon(this.props.user.id, localStorage.getItem('token')).then(pokemon => {
        this.setState({
          team: pokemon,
          previouslySeenUser: this.props.user
        })
      })
    }
  }

  setPokemon = () => {
    const pokemon_ids = this.state.team.map(p => p.id)
    setUserPokemon(this.props.user.id, localStorage.getItem('token'), pokemon_ids).then(new_pokemon => {
      this.setState({
        team: new_pokemon
      })
    })
  }

  changeFilterInput = (input) => {
    this.setState({
      input
    })
  }

  addToTeam = (pokemon) => {
    if (this.state.team.length < 6 && !this.state.team.includes(pokemon)) {
      this.setState(prevState => {
        return {
          team: [...prevState.team, pokemon]
        }
      }, this.setPokemon)
    }


  }

  removeFromTeam = (pokemon) => {
    this.setState(prevState => {
      prevState.team.splice(prevState.team.indexOf(pokemon), 1)
      return {
        team: prevState.team
      }
    }, this.setPokemon)
  }

  render() {
    this.makeTeamFetch()
    const {
      pokemon
    } = this.props

    return (
      <Fragment>
        { this.props.user && <MyTeam pokemon={this.state.team} clickPokemon={this.removeFromTeam} savePokemon={this.setPokemon} />}
        <PokemonFilter inputValue={this.state.input} changeFilterInput={this.changeFilterInput} />
        <PokemonList pokemon={this.state.pokemon} filterText={this.state.input} clickPokemon={this.addToTeam} />
      </Fragment>
    )
  }
}

export default PokemonContainer
