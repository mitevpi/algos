import { Arrays } from "../src";

const nullArray = null;
const emptyArray = [];

test("import Arrays", () => {
  expect.anything(Arrays);
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

  const array01 = [
    [1, 2, 3],
    [4, 5, 7],
  ];
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

test("Arrays.chunk", () => {
  const array2 = ["tom", "peter", "mary", "tom", "mary", "mary", "jeremy"];
  const res = Arrays.chunk(array2, 2);
  const res2 = Arrays.chunk(nullArray, 2);
  const res3 = Arrays.chunk(emptyArray, 2);

  expect(res.length).toBe(4);
  expect(res2.length).toBe(0);
  expect(res3.length).toBe(0);
});
