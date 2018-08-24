import React from 'react'
import { connect } from 'react-redux'

import Instructor from './Instructor'
import * as actions from './actions'

const InstructorList = props => {
  console.log(props)
  const sortedInstructors = props.instructors
    .slice().sort((a, b) => b.votes - a.votes)

  return sortedInstructors.map(instructor =>
    <Instructor
      instructor={instructor}
      downVote={() => props.downVote(instructor.id)}
      upVote={() => props.upVote(instructor.id)}
    />
  )
}

const mapStateToProps = state => ({
  instructors: state
})

const mapDispatchToProps = dispatch => ({
  upVote: id => dispatch(actions.upVote(id)),
  downVote: id => dispatch(actions.downVote(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(InstructorList)
