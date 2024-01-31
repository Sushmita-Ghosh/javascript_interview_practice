// https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  return arr.filter(fn);
};

// Without using filter function

var filter = function (arr, fn) {
  let res = [];

  for (let i in arr) {
    if (fn(arr[i], Number(i))) {
      res.push(arr[i]);
    }
  }

  return res;
};

var filter = function (arr, fn) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      res.push(arr[i]);
    }
  }

  return res;
};
