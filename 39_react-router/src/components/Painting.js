import React from 'react'
import { Link } from 'react-router-dom'

const Painting = (props) =>
  <Link to={`/paintings/${props.painting.id}`}>
  <div
    className='painting-container'
  >
    <h3>{props.painting.title}</h3>
    <img className='painting' src={props.painting.image} />
    <p>{props.painting.artist.name}</p>
  </div>
  </Link>

export default Painting
