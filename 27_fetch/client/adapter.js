class Adapter {

  static getBrews() {
    return fetch("http://localhost:3000/brews/")
    .then(resp => resp.json())
  }

  static getBrew(brew) {
    return fetch(`http://localhost:3000/brews/${brew.id}`)
    .then(resp => resp.json())
  }
}