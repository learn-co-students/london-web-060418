const defaultState = {
  cost: 0,
  budget: 100,
  display: 0,
}

export default function (state=defaultState, action) {

  console.log("DISPLAY REDUCER ACTION", action)
  switch(action.type) {
    case "EAT_SUSHI":
      const newBudget = state.budget - action.payload.price
      return {...state, budget: newBudget} 
    default:
      return state
  }
}