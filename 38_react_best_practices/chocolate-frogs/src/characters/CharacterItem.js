import React, { Fragment } from 'react'

const CharacterItem = ({ character, color }) => {
  console.log(character)
  // const {
  //   character,
  //   color
  // } = props
  // { color: color } is the same as { color }
  return (
    <Fragment>
      <h4 style={ { color } }>{character.name}</h4>
      <h5>{character.role}</h5>
      <h5>{character.species}</h5>
    </Fragment>
  )
}

export default CharacterItem
