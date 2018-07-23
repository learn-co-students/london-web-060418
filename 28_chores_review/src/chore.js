// make new chores
// take info from db and give it our methods and properties

class Chore {
  constructor(chore) {
    this.id = chore.id
    this.priority = chore.priority
    this.title = chore.title
    this.duration = chore.duration
  }

  // element() {
  //   // returns a fully assembled chore element which ChoresController can append to the DOM
  //   const div = document.createElement('div')
  //   const title = document.createElement('p')
  //   title.innerText = `Title: ${this.title}`
  //   const priority = document.createElement('p')
  //   priority.innerText = `Priority: ${this.priority}`
  //   const duration = document.createElement('p')
  //   duration.innerText = `Duration: ${this.duration}`
  //
  //   div.classList.add('chore-card')
  //   div.append(title, priority, duration)
  //   return div
  // }
}