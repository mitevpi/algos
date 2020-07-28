import { ArraysObjective } from "../src";

const states = [
  { population: 10, size: 13, state: "OH", near: "KY" },
  { population: 20, size: 20, state: "KY", near: "TN" },
  { population: 60, size: 20, state: "IN", near: "PA" },
  { population: 40, size: 13, state: "PA", near: "NY" },
  { population: "break", size: "test", state: "PA", near: "NY" },
];

function expectCustomRange(res) {
  expect(res[0].population).toBe(-10);
  expect(res[1].population).toBe(12);
  expect(res[2].population).toBe(100);
  expect(res[3].population).toBe(56);
  expect(res[0].size).toBe(-10);
  expect(res[1].size).toBe(100);
  expect(res[2].size).toBe(100);
  expect(res[3].size).toBe(-10);
}

function expectStandardRange(res) {
  expect(res[0].population).toBe(0);
  expect(res[1].population).toBe(0.2);
  expect(res[2].population).toBe(1);
  expect(res[3].population).toBe(0.6);
  expect(res[0].size).toBe(0);
  expect(res[1].size).toBe(1);
  expect(res[2].size).toBe(1);
  expect(res[3].size).toBe(0);
}

test("import ArraysObjective", () => {
  expect.anything(ArraysObjective);
});

test("ArraysObjective.groupBy", () => {
  const res = ArraysObjective.groupBy(states, "size");
  expect(res[13].length).toBe(2);
  expect(res[20].length).toBe(2);
});

test("ArraysObjective.max", () => {
  const res = ArraysObjective.max(states, "population");
  const res2 = ArraysObjective.max(states, "size");
  expect(res).toBe(60);
  expect(res2).toBe(20);
});

test("ArraysObjective.min", () => {
  const res = ArraysObjective.min(states, "population");
  const res2 = ArraysObjective.min(states, "size");
  expect(res).toBe(10);
  expect(res2).toBe(13);
});

test("ArraysObjective.normalizeByKey", () => {
  const res = ArraysObjective.normalizeByKey(states, "population");
  expect(res[0].population).toBe(0);
  expect(res[1].population).toBe(0.2);
  expect(res[2].population).toBe(1);
  expect(res[3].population).toBe(0.6);
});

test("ArraysObjective.normalizeByKey custom range", () => {
  const res = ArraysObjective.normalizeByKey(states, "population", -10, 100);
  expect(res[0].population).toBe(-10);
  expect(res[1].population).toBe(12);
  expect(res[2].population).toBe(100);
  expect(res[3].population).toBe(56);
});

test("ArraysObjective.normalizeByKeys", () => {
  const res = ArraysObjective.normalizeByKeys(states, ["population", "size"]);
  expectStandardRange(res);
});

test("ArraysObjective.normalizeByKeys custom range", () => {
  const res = ArraysObjective.normalizeByKeys(
    states,
    ["population", "size"],
    -10,
    100
  );
  expectCustomRange(res);
});

test("ArraysObjective.normalizeAuto", () => {
  const res = ArraysObjective.normalizeAuto(states);
  expectStandardRange(res);
});

test("ArraysObjective.normalizeAuto custom range", () => {
  const res = ArraysObjective.normalizeAuto(states, -10, 100);
  expectCustomRange(res);
});

test("ArraysObjective.sortBy", () => {
  const res = ArraysObjective.sortBy(states, "size", false);
  expect(res[0].state).toBe("OH");
  expect(res[1].state).toBe("PA");
  expect(res[2].state).toBe("KY");
  expect(res[3].state).toBe("IN");
});
