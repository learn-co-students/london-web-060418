const urlBase = `http://localhost:3001/api/v1`


const makePokemonRequest = () => {
  return fetch(`${urlBase}/pokemons`).then(resp => resp.json())
}

const createUser = (username, password) => {
  return fetch(`${urlBase}/users`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    })
  }).then(resp => resp.json())
}

const loginUser = (username, password) => {
  return fetch(`${urlBase}/login`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    })
  }).then(resp => resp.json())
}

const getCurrentUser = (token) => {
  return fetch(`${urlBase}/current_user`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
  }).then(resp => resp.json())
}

const getUserPokemon = (id, token) => {
  return fetch(`${urlBase}/users/${id}/pokemon`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    }
  }).then(resp => resp.json())
}

const setUserPokemon = (id, token, pokemon_ids) => {
  return fetch(`${urlBase}/users/${id}/pokemon`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token
    },
    method: 'POST',
    body: JSON.stringify({
      pokemon_ids
    })
  }).then(resp => resp.json())
}

export {
  makePokemonRequest,
  createUser,
  loginUser,
  getCurrentUser,
  getUserPokemon,
  setUserPokemon
}
