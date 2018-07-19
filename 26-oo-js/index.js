function loggingIt() {
  return this
}

const logArrow = () => {
  console.log(this)
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
const Person = (function () {
  // class variable
  let all = []

  let init = function(role, hobby, name) {
    // instance variables
    this.role = role
    this.hobby = hobby
    this.name = name
    all.push(this)
  }

  // class method
  init.all = function() {
    return [...all]
  }

  return init
})()

Person.prototype.afterWork = afterWork

function Person(role, hobby, name) {
  this.role = role
  this.hobby = hobby
  this.name = name
}

// makes the function a property on Person's prototype chain
// all Person objects will utilize the same afterWork function in memory

// dan.afterWork() // "After 6pm I love to skateboard."

const Person = (function() {
  let all = []

  return class Person {
    constructor (role, hobby, name) {
      // instance variables
      this.role = role
      this.hobby = hobby
      this.name = name
      all.push(this)
    }

    // class method
    static all() {
      return [...all]
    }

    // instance method
    afterWork() {
      return `After 6pm I love to ${this.hobby}.`
    }
  }
})()


// ES6
class Person {
  constructor (role, hobby, name) {
    // instance variables
    this.role = role
    this.hobby = hobby
    this.name = name
    all.push(this)
  }

  // class method
  static all() {
    return [...all]
  }

  // instance method
  afterWork() {
    return `After 6pm I love to ${this.hobby}.`
  }
}






