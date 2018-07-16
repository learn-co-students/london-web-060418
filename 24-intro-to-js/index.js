document.addEventListener('DOMContentLoaded', yo)

function yo() {console.log('yo yo yo')}

// JS Data Types
// Strings
// Numbers
//   - NaN: falsey
//   - 0: falsey
// Objects!!!
//   - arrays
//     - empty: !![].length
//   - Functions
//   - pojo {key: 'value'}
//     - empty: !!Object.keys({}).length
//   - promise
// Booleans
// Undefined: falsey
// Null: falsey
// Symbols

console.log(banana) // undefined

var banana = 'banana'
console.log(banana) // 'banana'


const apple = 'apple'
function bananaMaker() {
  const banana = 'banana'

  console.log(banana) // banana
  console.log(apple)  // apple

  return banana
}

console.log(banana) // Uncaught ReferenceError: banana is not defined


for(let i=0; i<5; i++) {
  console.log('lol');
}

console.log(i) Uncaught ReferenceError: i is not defined

if(true) {
  var dan = 'says hi'
  const brooke = 'says bye'
}

console.log(dan) // says hi
console.log(brooke) // Uncaught ReferenceError: brooke is not defined


(function() {
  console.log('you can only run me once');
})()

