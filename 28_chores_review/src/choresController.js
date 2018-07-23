// reads and writes to DOM
// accepts form params and instantiates chores
class ChoresController {
  static init() {
    // fetch data
    // make chores out of data
    // put chores on the DOM
    Adapter.getChores()
    .then(ChoresController.renderChores)
    const form = document.querySelector('#new-chore-form')
    form.addEventListener('submit', ChoresController.handleSubmit)
  }

  static renderChores(chores) {
    // console.log(chores);
    chores.forEach(ChoresController.renderChore)
  }

  static renderChore(chore) {
    // make a chore instance
    // put chore on DOM
    // const newChore = new Chore(chore)
    const chores = document.querySelector('#chore-list')
    const choreEl = ChoresController.createChoreElement(chore)
    chores.append(choreEl)
  }

  static createChoreElement(chore) {
    // returns a fully assembled chore element which ChoresController can append to the DOM
    const div = document.createElement('div')
    const title = document.createElement('p')
    title.innerText = `Title: ${chore.title}`
    const priority = document.createElement('p')
    priority.innerText = `Priority: ${chore.priority}`
    const duration = document.createElement('p')
    duration.innerText = `Duration: ${chore.duration}`

    div.classList.add('chore-card')
    div.append(title, priority, duration)
    return div
  }

  static handleSubmit(e) {
    e.preventDefault()
    const data = {
      title: e.target.title.value,
      duration: e.target.duration.value,
      priority: e.target.priority.value
    }
    Adapter.createChore(data)
      .then(ChoresController.renderChore)
  }


}