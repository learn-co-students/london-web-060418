function loggingIt() {
  return this
}

function afterWork() {
  return `After 6pm I love to ${this.hobby}.`
}

// creating new objects by hand is inefficient
let brooke = {
  role: 'TCF',
  hobby: 'travel',
  // bad habit, recreates a new function for each object
  log: function loggingIt() {
    return this
  },
  afterWork: afterWork
}

let steven = {
  role: 'TCF',
  hobby: 'ska band - trombone',
  log: function loggingIt() {
    return this
  },
  afterWork: afterWork
}

// we can create a factory function that returns new people objects
function peopleFactory(role, hobby, name) {
  const obj = {}
  obj.role = role
  obj.hobby = hobby
  obj.name = name
  return obj
}

// ES5
// we can create a constructor function using the new keyword
function Person(role, hobby, name) {
  this.role = role
  this.hobby = hobby
  this.name = name
}

const dan = new Person('Lead', "skateboard", "Dan")

// makes the function a property on the dan's prototype chain
// all Person objects will utilize the same afterWork function in memory
Person.prototype.afterWork = afterWork
dan.afterWork() // "After 6pm I love to skateboard."

// ES6
