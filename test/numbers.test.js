import { Numbers } from "../src";

test("import Numbers", () => {
  expect.anything(Numbers);
});

test("Numbers.RandomInt", () => {
  const res = Numbers.RandomInt(0, 10);
  expect(res).toBeGreaterThanOrEqual(0);
  expect(res).toBeLessThanOrEqual(10);
});

test("Numbers.Float", () => {
  const res = Numbers.RandomFloat(0, 10);
  expect(res).toBeGreaterThanOrEqual(0);
  expect(res).toBeLessThanOrEqual(10);
});
