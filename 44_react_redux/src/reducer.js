const initialState = [
    { id: 1, name: 'Nicolas', age: 100, votes: 0, imageUrl: 'https://image.ibb.co/fTo3tK/Screen_Shot_2018_08_24_at_08_13_01.png' },
    { id: 2, name: 'Dan', age: 101, votes: 0, imageUrl: 'https://image.ibb.co/g0CUYK/Screen_Shot_2018_08_24_at_08_13_13.png' },
    { id: 3, name: 'Rishi', age: 102, votes: 0, imageUrl: 'https://image.ibb.co/hmjySe/Screen_Shot_2018_08_24_at_08_12_53.png' }
]

const upVote = (oldInstructors, id) => {
    const instructors = oldInstructors.filter(i => i.id !== id)
    const instructor = JSON.parse(JSON.stringify(oldInstructors.find(i => i.id === id)))
    instructor.votes++
    return [...instructors, instructor]
}

const downVote = (oldInstructors, id) => {
    const instructors = oldInstructors.filter(i => i.id !== id)
    const instructor = JSON.parse(JSON.stringify(oldInstructors.find(i => i.id === id)))
    instructor.votes--
    return [...instructors, instructor]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPVOTE':
      return upVote(state, action.payload.id)
    case 'DOWNVOTE':
      return downVote(state, action.payload.id)
    default:
      return state
  }
}

export default reducer
