import React from 'react'

const CharacterFilter = ({ onFilterNameChange, onFilterMinistryChange, onFilterDeathEaterChange }) => {
  return (
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" onChange={onFilterNameChange} />
      <input type="checkbox" id="ministry" onChange={onFilterMinistryChange} />
      <label for="ministry">Ministry of Magic</label>
      <input type="checkbox" id="death" onChange={onFilterDeathEaterChange} />
      <label for="death">DeathEater</label>
    </div>
  )
}

export default CharacterFilter
