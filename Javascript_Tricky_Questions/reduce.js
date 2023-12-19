// Can you find the sum of the below array of objects?
// https://www.youtube.com/shorts/0v7HPqbGfig - Akash Ingole

const arr = [
  {
    sum: 1,
  },
  {
    sum: 2,
  },
  {
    sum: 3,
  },
];

// Solution:

const sum = arr.reduce((acc, curr) => {
  return acc + curr.sum;
}, 0);

console.log(sum);
