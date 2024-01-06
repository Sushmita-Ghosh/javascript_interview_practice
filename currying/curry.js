//  curry implementation

// converts f(a, b, c) to f(a)(b)(c)

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curried(...args, ...next);
      };
    }
  };
}

const add = (a, b, c) => a + b + c;

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3));
