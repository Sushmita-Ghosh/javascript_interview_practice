// Polyfill for map
// Array.map((num, i , arr) => {})

Array.prototype.myMap = function (cb) {
  let temp = [];

  // Here we need to use this as --> we will call the myMap funtion as arr.myMap --> this will reference the arr here
  for (let i = 0; i < this.length; i++) {
    // Here this -> arr
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const nums = [1, 2, 3, 4, 5];

const result = nums.myMap((num) => num * 2);

console.log(result);
// [ 2, 4, 6, 8, 10 ]
