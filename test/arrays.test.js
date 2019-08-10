import { Arrays } from "../src";

test("import Arrays", () => {
  expect.anything(Arrays);
});

test("Arrays.Sum", () => {
  const ar = [1, 2, 3, 4, 5, 6];
  const res = Arrays.Sum(ar);
  expect(res).toBe(21);
});
