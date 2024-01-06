// Write a currying function that takes infinite arguments.

//    sum(2)(3)(4) => 9
// sum(2)(3)(4)(5) => 14

//  calling it recursively till we encounter empty arguments
function sum(a) {
  return function (b) {
    if (b) {
      // if b is not empty
      return sum(a + b);
    }
    return a;
  };
}

console.log(sum(2)(3)(4)());

/**
 * 
1️ It will keep returning a function until arguments are provided.

2️⃣ If there are no more arguments specified, we simply return the value of 'a' which is the added total result
 */
