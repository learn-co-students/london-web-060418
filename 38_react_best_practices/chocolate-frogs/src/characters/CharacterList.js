import React from 'react'
import CharacterItem from './CharacterItem'

const filterByName = (characters, nameFilter) => {
  return characters.filter(c => c.name.toLowerCase().includes(nameFilter.toLowerCase()))
}

const CharacterList = ({ name, ministry, deathEater, characters, color }) => {
  var filtered = filterByName(characters, name)
  if (ministry) {
    filtered = filtered.filter(c => c.ministryOfMagic)
  }
  if (deathEater) {
    filtered = filtered.filter(c => c.deathEater)
  }
  const characterItems = filtered.map(c => <CharacterItem character={c} color={color} />)
  return (<div>{characterItems}</div>)
}

export default CharacterList
