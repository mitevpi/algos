const { ArraysObjective } = require("../dist/index");

const object1 = [
  { population: 10, size: 13, state: "OH", near: "KY" },
  { population: 20, size: 20, state: "KY", near: "TN" },
  { population: 60, size: 20, state: "IN", near: "PA" },
  { population: 40, size: 13, state: "PA", near: "NY" }
];

const result = ArraysObjective.normalizeByKey(object1, "population");
const result1 = ArraysObjective.normalizeByKeys(object1, ["population", "size"]);
const result2 = ArraysObjective.normalizeAuto(object1);

console.log(result);
console.log(result1);
console.log(result2);
console.log(result2);
