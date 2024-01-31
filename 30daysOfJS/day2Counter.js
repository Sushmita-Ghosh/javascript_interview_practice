//https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  return function () {
    return n++;
  };
};

const counter = createCounter(10);
counter(); // 10
counter(); // 11
counter(); // 12

// Same with classes

class Counter {
  constructor(n) {
    this.n = n;
  }

  increment() {
    return ++this.n;
  }
}

const count = new Counter(10);
console.log(count.increment()); //11
console.log(count.increment()); //12
