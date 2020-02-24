import { MockData } from "../src";

test("import MockData", () => {
  expect.anything(MockData);
});

test("Arrays.range", () => {
  const mockA = MockData.range(50);
  expect(MockData.range(50).length).toBe(50);
  expect(MockData.range(1).length).toBe(1);
  expect(MockData.range(500).length).toBe(500);
  expect(mockA[0]).toBe(0);
  expect(mockA[50]).toBeUndefined();
});

test("Arrays.packData", () => {
  const spaceTypes = [
    "Office",
    "Meeting",
    "Support",
    "Creative",
    "Circulation"
  ];
  const mock = MockData.packData(200);
  const spaces = mock.map(m => m.spaceType);

  // check dataset size
  expect(mock.length).toBe(200);

  // check space types
  spaceTypes.map(s => {
    expect(spaces).toContain(s);
  });

  // check radius and id
  spaceTypes.map(s => {
    expect(s.r).not.toBeNaN();
    expect(s.i).not.toBeNaN();
  });
});

test("Arrays.networkData", () => {
  const mock = MockData.networkData(200);
  const { nodes } = mock;

  // check dataset size
  expect(mock.nodes.length).toBe(200);
  expect(mock.links.length).toBe(199);

  // check node size
  mock.nodes.map(n => {
    expect(n.size).not.toBeNaN();
  });

  // check link size, source, and target
  mock.links.map(l => {
    expect(l.size).not.toBeNaN();
    expect(l.source).not.toBeNaN();
    expect(l.source).toBeLessThan(nodes.length);
    expect(l.target).not.toBeNaN();
    expect(l.target).toBeLessThan(nodes.length);
  });
});
