const defaultState = {
    sushis: [],
    eaten: [],
    // input: ""
  }

export default function(state=defaultState, action){
  // console.log("ACTION", action)
  console.log("SUSHI REDUCER ACTION", action)

  switch(action.type){
    case "EAT_SUSHI":
      return {...state, eaten: [...state.eaten, action.payload]}
    case "GET_ALL_SUSHIS":
      return {...state, sushis: action.payload}
    // case "HANDLE_INPUT":
    //  return {...state, inputL action.payload}
    default: 
      return state
  }
}