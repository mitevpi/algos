const { Arrays } = require("../dist/index");

const array1 = [1, 2, 3, 4, 5, 6, 2, 3, 4, 6, 7, 7, 2];
const array2 = ["tom", "peter", "mary", "tom", "mary", "mary", "jeremy"];
const object1 = [
  { population: 10, size: 13, state: "OH", near: "KY" },
  { population: 20, size: 20, state: "KY", near: "TN" },
  { population: 60, size: 20, state: "IN", near: "PA" },
  { population: 40, size: 13, state: "PA", near: "NY" }
];

const result1 = Arrays.sum(array1);
const result2 = Arrays.groupBy(object1, "size");
const result3 = Arrays.summarize(array2);
const result4 = Arrays.max(array1);
const result5 = Arrays.sortBy(object1, "size", false);
const result6 = Arrays.hierarchyFromFlat(object1, "state", "near");

console.log(result1); // 52
console.log(result2); // {2 Objects}
console.log(result3); // {tom: 2, peter: 1, mary: 3, jeremy: 1}
console.log(result4); // 7
console.log(result5); // Array{}
console.log(result6); // WIP

console.log(result6);


