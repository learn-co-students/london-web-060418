import React from 'react'
import PokemonItem from './PokemonItem'


const MyTeam = ({pokemon, clickPokemon, setTeam, savePokemon }) => {
  const team = pokemon.map(pokemonItem => {
    return <PokemonItem pokemon={pokemonItem} key={pokemonItem.id} click={clickPokemon} />
  })

  return (
    <div className="ui segment inverted red team">
      <div className="ui five column grid">
        {/*<button onClick={savePokemon}>Save!</button>*/}
        <div className="row team-row">
          {team}
        </div>
      </div>
    </div>
  )
}

export default MyTeam
