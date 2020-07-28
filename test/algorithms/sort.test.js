import { Sort } from "../../src/api/Algorithms/Sort";

const cleanArray = [-1, 0, 5, 3, 4, 2, 6, 12, 1, -0];
const dirtyArray = [-1, 1, 2, "a string;", { hi: 1 }, 3, 4, 5, 6, 12, 0, -0];

test("import Sort", () => {
  expect.anything(Sort);
});

test("Sort.bubbleSort", () => {
  const resultClean = Sort.bubbleSort(cleanArray);
  const resultDirty = Sort.bubbleSort(dirtyArray);
  expect(resultClean).toEqual([-1, 0, -0, 1, 2, 3, 4, 5, 6, 12]);
  expect(resultDirty).toEqual(dirtyArray);
});

test("Sort.insertionSort", () => {
  const resultClean = Sort.insertionSort(cleanArray);
  const resultDirty = Sort.insertionSort(dirtyArray);
  expect(resultClean).toEqual([-1, 0, -0, 1, 2, 3, 4, 5, 6, 12]);
  expect(resultDirty).toEqual(dirtyArray);
});

test("Sort.mergeSort", () => {
  const resultClean = Sort.mergeSort(cleanArray);
  // const resultDirty = Sort.mergeSort(dirtyArray);
  expect(resultClean).toEqual([-1, 0, -0, 1, 2, 3, 4, 5, 6, 12]);
  // expect(resultDirty).toEqual(dirtyArray);
});

test("Sort.quickSort", () => {
  const resultClean = Sort.quickSort(cleanArray);
  // const resultDirty = Sort.quickSort(dirtyArray);
  expect(resultClean).toEqual([-1, -0, 0, 1, 2, 3, 4, 5, 6, 12]);
  // expect(resultDirty).toEqual([-1, -0, 0, 1, 2, 3, 4, 5, 6, 12, NaN, NaN]);
});
