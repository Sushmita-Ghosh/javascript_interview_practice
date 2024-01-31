//leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  return nums.reduce(fn, init); // using reduce
};

var reduce = function (nums, fn, init) {
  let res = init;

  for (let i = 0; i < nums.length; i++) {
    res = fn(res, nums[i]);
  }
  return res;
};

// let arr = [1, 2, 3, 4, 5];

// arr.reduce((acc, curr) => {
//     return acc + curr
// }, 0)

var reduce = function (nums, fn, init) {
  let res = init;

  nums.forEach((n) => {
    res = fn(res, n);
  });

  return res;
};
