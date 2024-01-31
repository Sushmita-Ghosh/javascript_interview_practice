// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  return arr.map(fn);
};

var map = function (arr, fn) {
  const res = [];
  // in will give us an string index so we need to typecast it
  for (let i in arr) {
    res.push(fn(arr[i], Number(i)));
  }
  return res;
};

var map = function (arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res[i] = fn(arr[i], i);
  }
  return res;
};
