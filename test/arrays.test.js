import { Arrays } from "../src";

const dirtyArray = [-1, 1, 2, "a string;", { hi: 1 }, 3, 4, 5, 6, 12, 0, -0];

const states = [
  { population: 10, size: 13, state: "OH", near: "KY" },
  { population: 20, size: 20, state: "KY", near: "TN" },
  { population: 60, size: 20, state: "IN", near: "PA" },
  { population: 40, size: 13, state: "PA", near: "NY" }
];

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
  const res = Arrays.groupBy(states, "size");
  expect(res[13].length).toBe(2);
  expect(res[20].length).toBe(2);
});

test("Arrays.sortBy", () => {
  const res = Arrays.sortBy(states, "size", false);
  expect(res[0].state).toBe("OH");
  expect(res[1].state).toBe("PA");
  expect(res[2].state).toBe("KY");
  expect(res[3].state).toBe("IN");
});

test("Arrays.summarize", () => {
  const array2 = ["tom", "peter", "mary", "tom", "mary", "mary", "jeremy"];
  const res = Arrays.summarize(array2);
  expect(res.jeremy).toBe(1);
  expect(res.mary).toBe(3);
  expect(res.peter).toBe(1);
  expect(res.tom).toBe(2);
});

test("Arrays.flatten", () => {
  const resultArray = [1, 2, 3, 4, 5, 7];
  const resultArray02 = [1, 0, 1, 2, 3, 0, 4, 5, 7];

  const array01 = [[1, 2, 3], [4, 5, 7]];
  const array02 = [[[1, 2, 3]], [4, 5, 7]];
  const array03 = [[[1, 2, 3]], [[4, 5, 7]]];
  const array04 = [1, [0, [[1, [2, 3], 0]]], [[4, 5, 7]]];

  const flat01 = Arrays.flatten(array01);
  const flat02 = Arrays.flatten(array02);
  const flat03 = Arrays.flatten(array03);
  const flat04 = Arrays.flatten(array04);

  expect(JSON.stringify(flat01)).toBe(JSON.stringify(resultArray));
  expect(JSON.stringify(flat02)).toBe(JSON.stringify(resultArray));
  expect(JSON.stringify(flat03)).toBe(JSON.stringify(resultArray));
  expect(JSON.stringify(flat04)).toBe(JSON.stringify(resultArray02));
});
