// How will we implement sum(2)(3)(4) in javascript?

// This function should sum all the arguments passed
// Convert sum(2,6,1) to sum(2)(6)(1)

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(3)(4));
