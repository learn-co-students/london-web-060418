import React from 'react'

const PaintingDetails = props =>
  <div>
    <button onClick={props.handleClick}> BACK </button>
    <h2>{props.painting.title}</h2>
    <img src={props.painting.image} />
    <p>{props.painting.artist.name}</p>
    <p>{props.painting.artist.hometown}</p>
    <p>{props.painting.artist.birthday} - {props.painting.artist.deathday}</p>
  </div>

export default PaintingDetails

// {
//     id: '59bd5a519c18db5297a32479',
//     collecting_institution: '',
//     date: '1446',
//     dimensions: {
//       text: '11 1/2 Ã— 8 1/2 in',
//       height: 11.5,
//       width: 8.5,
//       depth: null,
//       diameter: null
//     },
//     slug: 'petrus-christus-portrait-of-a-carthusian',
//     title: 'Portrait of a Carthusian',
//     image:
//       'https://d32dm0rphc51dk.cloudfront.net/pVc7CubFzVlPhbErTAqyYg/medium.jpg',
//     artist: {
//       name: 'Petrus Christus',
//       hometown: 'Baarle-Hertog, Belgium',
//       birthday: '1410',
//       deathday: '1475'
//     },
//     votes: 64
//   },