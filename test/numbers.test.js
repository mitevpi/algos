import { Numbers } from "../src";

test("import Numbers", () => {
  expect.anything(Numbers);
});

test("Numbers.randomInt", () => {
  const res = Numbers.randomInt(0, 10);
  expect(res).toBeGreaterThanOrEqual(0);
  expect(res).toBeLessThanOrEqual(10);
});

test("Numbers.float", () => {
  const res = Numbers.randomFloat(0, 10);
  expect(res).toBeGreaterThanOrEqual(0);
  expect(res).toBeLessThanOrEqual(10);
});
