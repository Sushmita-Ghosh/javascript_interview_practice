// Evaluate(”sum”)(2)(4) ⇒ 2+4 = 6 on basis of input given to first param.

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") {
        return a + b;
      } else if (operation === "sub") {
        return a - b;
      } else if (operation === "mul") {
        return a * b;
      } else if (operation === "div") {
        return a / b;
      } else {
        return "Invalid operation";
      }
    };
  };
}

console.log(evaluate("sum")(2)(4));

// reusing currying
const mul = evaluate("mul"); // this mul can be used again and again

console.log(mul(2)(4));
console.log(mul(2)(6));
