import { Strings } from "../src";

test("import Strings", () => {
  expect.anything(Strings);
});

test("Strings.removeNonPrintable", () => {
  const res = Strings.removeNonPrintable("ÄçÇéffÉêPHP-MySQLöÖÐþúÚ");
  expect(res).toBe("ffPHP-MySQL");
});

test("Strings.removeNonPathable", () => {
  const res = Strings.removeNonPathable("<a thing> /|~`|path");
  expect(res).toBe("a thing ~`path");
});
