import { ArraysNumerical } from "../src";

const dirtyArray = [-1, 1, 2, "a string;", { hi: 1 }, 3, 4, 5, 6, 12, 0, -0];

test("import Arrays", () => {
  expect.anything(ArraysNumerical);
});

test("Arrays.sum", () => {
  const ar = [1, 2, 3, 4, 5, 6];
  const res = ArraysNumerical.sum(ar);
  expect(res).toBe(21);
});

test("Arrays.max", () => {
  const res = ArraysNumerical.max(dirtyArray);
  expect(res).toBe(12);
});

test("Arrays.min", () => {
  const res = ArraysNumerical.min(dirtyArray);
  expect(res).toBe(-1);
});
