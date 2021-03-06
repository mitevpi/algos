import { Strings } from "../src";

test("import Strings", () => {
  expect.anything(Strings);
});

test("Strings.checkNull", () => {
  const res = Strings.checkNull("ÄçÇéffÉêPHP-MySQLöÖÐþúÚL");
  const res2 = Strings.checkNull("");
  const res3 = Strings.checkNull(null);

  expect(res).toBe("ÄçÇéffÉêPHP-MySQLöÖÐþúÚL");
  expect(res2).toBe("");
  expect(res3).toBe("");
});

test("Strings.removeNonPrintable", () => {
  const res = Strings.removeNonPrintable("ÄçÇéffÉêPHP-MySQLöÖÐþúÚ");
  expect(res).toBe("ffPHP-MySQL");
});

test("Strings.removeNonPathable", () => {
  const res = Strings.removeNonPathable("<a thing> /|~`|path");
  expect(res).toBe("a thing ~`path");
});

test("Strings.createUniqueID", () => {
  const res = Strings.createUniqueID();
  expect(res.length).toBeGreaterThanOrEqual(1);
});
