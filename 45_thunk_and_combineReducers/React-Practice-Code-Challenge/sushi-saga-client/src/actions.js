const API = "http://localhost:3000/sushis"

export function eatSushiAction (sushi) {
  return {type: "EAT_SUSHI", payload: sushi}
}

// export function getAllSushis (dispatch) {
//  fetch(API)
//  .then(res => res.json())
//  .then((sushis) => {
//    dispatch({type: "GET_ALL_SUSHIS", payload: sushis})
//  })
// }

export function getAllSushis () {
  return function (dispatch){
    return fetch(API)
    .then(res => res.json())
    .then((sushis) => {
      dispatch({type: "GET_ALL_SUSHIS", payload: sushis})
    })
  }
}

export function anotherAction () {
  return function (dispatch){
    return 
  }
}

export function thunkyAction (beef) {
  return function (dispatch){
    
  }
}