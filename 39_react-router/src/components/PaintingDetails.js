import React from 'react'

const PaintingDetails = props => {
  console.log(props)
  const painting = props.paintings.find(painting => painting.id === props.match.params.id)
  return (
    <div>
      <h2>{painting.title}</h2>
      <img src={painting.image} />
      <p>{painting.artist.name}</p>
      <p>{painting.artist.hometown}</p>
      <p>{painting.artist.birthday} - {painting.artist.deathday}</p>
    </div>
  )
}

export default PaintingDetails
