// IIFE -> Immediately Invoked Function Expression

var x = 1;

var output = (function () {
  delete x; // will  not delete x as it is a variable and not a property of object
  return x; // 1
})();

console.log(output);

// The changed code to make it work on window

window.x = 1;

var output = (function () {
  delete window.x;
  return window.x;
})();

console.log(output); // will print undefined now
