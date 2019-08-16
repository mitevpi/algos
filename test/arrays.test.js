import { Arrays } from "../src";

const dirtyArray = [-1, 1, 2, "a string;", { hi: 1 }, 3, 4, 5, 6, 12, 0, -0];

test("import Arrays", () => {
  expect.anything(Arrays);
});

test("Arrays.sum", () => {
  const ar = [1, 2, 3, 4, 5, 6];
  const res = Arrays.sum(ar);
  expect(res).toBe(21);
});

test("Arrays.max", () => {
  const res = Arrays.max(dirtyArray);
  expect(res).toBe(12);
});

test("Arrays.min", () => {
  const res = Arrays.min(dirtyArray);
  expect(res).toBe(-1);
});

test("Arrays.groupBy", () => {
  const ar = [
    { population: 10, size: 13 },
    { population: 20, size: 20 },
    { population: 60, size: 20 },
    { population: 40, size: 13 }
  ];
  const res = Arrays.groupBy(ar, "size");
  expect(res[13].length).toBe(2);
  expect(res[20].length).toBe(2);
});

test("Arrays.summarize", () => {
  const array2 = ["tom", "peter", "mary", "tom", "mary", "mary", "jeremy"];
  const res = Arrays.summarize(array2);
  expect(res.jeremy).toBe(1);
  expect(res.mary).toBe(3);
  expect(res.peter).toBe(1);
  expect(res.tom).toBe(2);
});
