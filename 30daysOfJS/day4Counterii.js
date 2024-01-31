// https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let initialCount = init; // This is req for reset function

  return {
    increment: function () {
      return ++initialCount;
    },
    decrement: function () {
      return --initialCount;
    },
    reset: function () {
      return (initialCount = init);
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

class Counter {
  constructor(init) {
    this.init = init;
    this.count = init;
  }

  increment() {
    return ++this.count;
  }

  decrement() {
    return --this.count;
  }

  reset() {
    return (this.count = this.init);
  }
}
