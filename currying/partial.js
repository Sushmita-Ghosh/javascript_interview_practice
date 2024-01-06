// Currying vs Partial Application

// Partial application transforms a function into another function with smaller arity.
// arity - number of arguments/ operands in the original function.

function add(a) {
  return function (b, c) {
    return a + b + c;
  };
}

console.log(add(1)(2, 3));

//or

const x = add(10);

console.log(x(20, 30));

// in currying,
// we are creating a new function with smaller arity
// and we are passing the arguments to the new function

// below is currying
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
