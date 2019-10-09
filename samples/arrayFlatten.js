const algos = require("../dist/index");

// for (let i = 0; i < 2; i++) {
//   console.log(i);
// }

const resultArray = [1, 2, 3, 4, 5, 7];
const array01 = [[1, 2, 3], [4, 5, 7]];
const array02 = [[[1, 2, 3]], [4, 5, 7]];
const array03 = [[[1, 2, 3]], [[4, 5, 7]]];
const array04 = [1, [0, [[1, [2, 3], 0]]], [[4, 5, 7]]];

const flat01 = algos.Arrays.flatten(array01);
const flat02 = algos.Arrays.flatten(array02);
const flat03 = algos.Arrays.flatten(array03);
const flat04 = algos.Arrays.flatten(array04);

console.log(resultArray);
console.log(flat01);

console.log(JSON.stringify(resultArray) === JSON.stringify(flat01));
