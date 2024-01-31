// https://leetcode.com/problems/return-length-of-arguments-passed/?envType=study-plan-v2&envId=30-days-of-javascript

var argumentsLength = function (...args) {
  let length = 0;
  for (let i = 0; i < args.length; i++) {
    length += 1;
  }
  return length;
};

var argumentsLength = function (...args) {
  return args.reduce((acc, curr) => {
    return acc + 1;
  }, 0);
};

var argumentsLength = function (...args) {
  return args.length;
};
