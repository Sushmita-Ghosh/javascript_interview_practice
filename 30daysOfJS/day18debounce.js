/**
 * “With debounce, the more frequent the calls, the more the execution is delayed. The function runs only after calls stop for the specified delay.”
 * 
 * 
 * Example: t = 9 ms

Call at 0 ms → function scheduled at 9 ms

Call at 3 ms → previous timer cancelled → function now scheduled at 12 ms

Call at 6 ms → previous timer cancelled → function now scheduled at 15 ms

Call at 10 ms → previous timer cancelled → function now scheduled at 19 ms



Imagine this situation 🧠

You have a timer that rings after 3 seconds.

Every time you click a button, you:

Stop the old timer

Start a new 3-second timer

That’s it. That’s debounce.

Now relate it to the code
let timer;


This is one single timer

It lives outside the function call

Every time the function runs:
clearTimeout(timer);


If a timer is already running → stop it

timer = setTimeout(() => fn(...args), t);


Start a new timer

Wait t milliseconds

If nothing happens → call fn

What if the function is called again quickly?

Old timer ❌ stopped

New timer ⏱️ started again

Countdown restarts

When does fn actually run?

👉 Only when you STOP calling the function for t milliseconds.

Real-life example (typing)

You type:

H → He → Hel → Hell → Hello


Each keystroke:

Cancels previous timer

Starts a new one

When you stop typing for t ms:
✅ Function runs once

One sentence explanation

The timer keeps getting reset until you stop calling the function, and only then does the function run.
 */

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // everytime the fn is called the timer will be cancelled
    timer = setTimeout(() => fn(...args), t); // new timer will be set . only when you stop calling the fn, after t ms the fn will run
  };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
