import { Triple } from "../src";

test("import Triple", () => {
  expect.anything(Triple);
});

test("Triple.triple", () => {
  const temp = Triple.triple(5);
  expect(temp).toBe(15);
});
