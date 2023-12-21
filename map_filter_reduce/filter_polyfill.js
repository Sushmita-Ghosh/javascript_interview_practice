Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const numbers = [1, 2, 3, 4, 5];

const moreThanThree = numbers.myFilter((num) => num > 3);

console.log(moreThanThree);
// [4, 5];
