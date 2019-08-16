const { Arrays } = require("../dist/index");

const array1 = [1, 2, 3, 4, 5, 6, 2, 3, 4, 6, 7, 7, 2];
const array2 = ["tom", "peter", "mary", "tom", "mary", "mary", "jeremy"];
const object1 = [
  { population: 10, size: 13 },
  { population: 20, size: 20 },
  { population: 60, size: 20 },
  { population: 40, size: 13 }
];

const result1 = Arrays.sum(array1);
const result2 = Arrays.groupBy(object1, "size");
const result3 = Arrays.summarize(array2);
const result4 = Arrays.max(array1);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

console.log(result4);


