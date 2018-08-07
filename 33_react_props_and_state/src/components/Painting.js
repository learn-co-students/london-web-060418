import React from 'react'

const Painting = (props) =>
  <div onClick={() => props.selectPainting(props.painting)}
    className='painting-container'
  >
    <h3>{props.painting.title}</h3>
    <img className='painting' src={props.painting.image} />
    <p>{props.painting.artist.name}</p>
  </div>

export default Painting
