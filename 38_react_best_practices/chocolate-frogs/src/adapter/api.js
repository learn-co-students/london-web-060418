
const FETCH_URL = 'https://www.potterapi.com/v1/characters?key=1'

const makeCharacterFetch = () => {
  return fetch(FETCH_URL).then(r => r.json())
}


export {
  makeCharacterFetch
}
