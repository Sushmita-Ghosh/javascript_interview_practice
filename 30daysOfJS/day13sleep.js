//https://www.youtube.com/watch?v=Z_7lP35E45I&list=PL5TWX8S_wvBMcwxbbH-k8BmNKu__0y87k&index=14

/**
 * Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

Note that minor deviation from millis in the actual sleep duration is acceptable.

 

Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
 

Constraints:

1 <= millis <= 1000
 */

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100 current time - time taken to execute
 */
