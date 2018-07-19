# This
## Objectives
* Leverage Ruby's `self` to frame our JS `this` conversation
* Recognize and value the differences
* Answer Dan Abramov's [question](https://twitter.com/dan_abramov/status/790858537513656320)
* When is the value of `this` set? When it's **NOT** set?
* The JS environment rules that govern `this`
    1.  `this` within a function called with the keyword `new` in front will point to the newly created object
    1.  `this` within a function called with apply/call/bind will be the object passed as the first parameter
    1.  `this` within a function called with a context (i.e. Object.method()) will be the object.
    1.  `this` for a simple function call (fn()) will be the window (browser) or the global object (Node). If we are in strict mode this will be undefined for simple function calls
* How do we control `this`
* This of arrow functions

## This vs Self
- this refers to the instance of an object
- fairly similar to self
  - this tries to interpret the context more
  - context of called versus defined

- self is about context
  - the receiver of the message or method
  - what the method is being called on
  - doesn't change
- this is about where it is defined
  - what object is receiving the function call

## Resources
* [MDN `this` article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
