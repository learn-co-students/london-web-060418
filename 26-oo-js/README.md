# This
## Objectives
* Leverage Ruby's `self` to frame our JS `this` conversation
* Recognize and value the differences
* Answer Dan Abramov's [question](https://twitter.com/dan_abramov/status/790858537513656320)
* The JS environment rules that govern `this`
    1.  `this` within a function called with the keyword `new` in front will point to the newly created object
    <!-- 1.  `this` within a function called with apply/call/bind will be the object passed as the first parameter -->
    1.  `this` within a function called with a context (i.e. Object.method()) will be the object.
    1.  `this` for a simple function call (fn()) will be the window (browser) or the global object (Node). If we are in strict mode this will be undefined for simple function calls
* How do we control `this`
* This of arrow functions

## This vs Self
- this and self are both about what is the receiver of the method call
- in JS methods can be passed around as objects, to this can change

## Resources
* [MDN `this` article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
