const { Objects } = require("../dist/index");

const object1 = [
  { population: 10, size: 13 },
  { population: 20, size: 20 },
  { population: 60, size: 20 },
  { population: 40, size: 13 }
];
const result1 = Objects.GroupBy(object1, "size");

console.log(result1);
console.log(result1);
