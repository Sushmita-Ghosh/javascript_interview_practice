// Function Composition

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

// The function composition of an empty list of functions is the identity function f(x) = x.

/**
 * @param {Function[]} functions
 * @return {Function}
 */

// We will traverse the array in reverse order - right to left and call it on x
var compose = function (functions) {
  return function (x) {
    for (let fn of functions.reverse()) {
      x = fn(x);
    }
    return x;
  };
};

// Using reduceRight --> to iterate the array in reverse order - Amazing 🤯

// f(acc, curr) => acc+ curr --> normal arr
// f(acc, fn) => fn(acc)
var compose = function (functions) {
  const fn = (acc, currentFunction) => currentFunction(acc);
  // const fn = (x, f) => f(x);

  return function (x) {
    // edge case
    if (functions.length === 0) {
      return x;
    }
    return functions.reduceRight(fn, x);
  };
};
