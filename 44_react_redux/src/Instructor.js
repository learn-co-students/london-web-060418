import React from 'react'

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px black solid',
  margin: 10,
  padding: 10
}

const imgStyle = {
  width: 120,
  borderRadius: '50%'
}

const Instructor = props =>
  <div style={style}>
    <h1>{props.instructor.name}</h1>
    <img style={imgStyle} src={props.instructor.imageUrl} />
    <p>Votes: {props.instructor.votes}</p>
    <button onClick={props.upVote}>+</button>
    <button onClick={props.downVote}>-</button>
  </div>

export default Instructor
