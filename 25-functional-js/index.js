// pure function
const arr = [1,2,3,4]

const newArr = arr.map(el => el * el)

// newArr is different from arr
console.log(newArr, arr)

// non-pure version

arr.forEach((el, i) => {
  arr[i] = el * el
})

// original array is updated
console.log(arr)


// creates a closure where our apples can have an incrementing count

const apple = (function() {
  // creates a new variable in memory
  let count = 0

  // creates a new function in memory connected to the variable
  return function() {
    count++
    console.log(`I've sold ${count} apples`)
  }
})()

// Factory pattern lets us use a function to create fruit functions

const fruitMaker = function(fruit) {
  // creates a new variable in memory
  let count = 0

  // creates a new function in memory connected to the variable
  return function() {
    count++
    console.log(`I've sold ${count} ${fruit}s`)
  }
}

function fruitFactory() {
  return function(fruit) {
    // creates a new variable in memory
    let count = 0

    // creates a new function in memory connected to the variable
    return function() {
      count++
      console.log(`I've sold ${count} ${fruit}s`)
    }
  }
}
