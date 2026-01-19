/**
 * 
 * Two things run at the same time:

⏰ Timeout clock (rejects after t ms)

🚀 Function execution

Whichever finishes first wins.


What is the goal?

We want to limit how long a function is allowed to run.

If the function finishes within t milliseconds → return its result

If it takes longer than t milliseconds → throw "Time Limit Exceeded"
 */

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      /** Keep a timer at background, if the fn doesnot finish execution we will rejeect it */
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then(resolve)
        .catch(reject);
    });
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
