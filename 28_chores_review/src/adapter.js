// requests information and returns it

// const Adapter = {
//   getChores: function() {
//     const url = `http://localhost:3000/chores/`
//     return fetch(url)
//       .then(r => r.json())
//   },
//   createChore: function(data) {
//     const url = `http://localhost:3000/chores/`
//     const options = {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//     }
//     return fetch(url, options)
//       .then(r => r.json())
//   }
// }

class Adapter {
  static getChores() {
    const url = `http://localhost:3000/chores/`
    return fetch(url)
      .then(r => r.json())
  }

  static createChore(data) {
    const url = `http://localhost:3000/chores/`
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    return fetch(url, options)
      .then(r => r.json())
  }
}