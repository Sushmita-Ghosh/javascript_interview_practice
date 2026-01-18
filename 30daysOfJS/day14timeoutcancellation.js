/**
 * function in javascript the allows the execution of a function after a certain amount of time
 * setTimeout(function, time)
 *
 * // clearTimeout() function is used to cancel the execution of a function that has been scheduled using setTimeout().;; cancel a timeout before it triggers
 */

/**
 * Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

setTimeout(cancelFn, cancelTimeMs)
Initially, the execution of the function fn should be delayed by t milliseconds.

If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.
 */

/**
 * SIMPLE MEANING
 *
 * You are given: a function fn, an array of arguments args and a delay time t (in milliseconds)
 *
 * Your task is to return a cancel function (cancelFn).
 *
 * How it should work:
 *
 * The function fn is scheduled to run after t milliseconds using the given arguments.
 *
 * A cancel function is also scheduled to be called after cancelTimeMs.
 *
 * If cancelFn is called before t milliseconds, the execution of fn should be cancelled.
 *
 * If cancelFn is not called before t milliseconds, then fn runs normally with the provided arguments.
 *
 * In short:
 *
 * Run fn after t ms — unless cancelFn is called first, in which case fn never runs.
 */

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  const cancelFn = () => {
    clearTimeout(timer); // cancel the execution
  };

  const timer = setTimeout(() => {
    fn(...args);
  }, t);

  return cancelFn;
};

/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */
