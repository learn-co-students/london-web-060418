export const upVote = id => ({
    type: 'UPVOTE',
    payload: { id }
})

export const downVote = id => ({
    type: 'DOWNVOTE',
    payload: { id }
})
