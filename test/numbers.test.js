import { Numbers } from "../src";

test("import Numbers", () => {
  expect.anything(Numbers);
});

test("Numbers.randomInt", () => {
  const res = Numbers.randomInt(0, 10);
  expect(res).toBeGreaterThanOrEqual(0);
  expect(res).toBeLessThanOrEqual(10);
});

test("Numbers.randomFloat", () => {
  const res = Numbers.randomFloat(0, 10);
  expect(res).toBeGreaterThanOrEqual(0);
  expect(res).toBeLessThanOrEqual(10);
});

test("Numbers.normalize", () => {
  const res = Numbers.normalize(5, 5, 10);
  const res1 = Numbers.normalize(7, 5, 10);
  expect(res).toBe(0);
  expect(res1).toBe(0.4);
});
