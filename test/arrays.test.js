import { Arrays } from "../src";

test("import Arrays", () => {
  expect.anything(Arrays);
});

test("Arrays.Sum", () => {
  const ar = [1, 2, 3, 4, 5, 6];
  const res = Arrays.Sum(ar);
  expect(res).toBe(21);
});

test("Arrays.GroupBy", () => {
  const ar = [
    { population: 10, size: 13 },
    { population: 20, size: 20 },
    { population: 60, size: 20 },
    { population: 40, size: 13 }
  ];
  const res = Arrays.GroupBy(ar, "size");
  expect(res[13].length).toBe(2);
  expect(res[20].length).toBe(2);
});
