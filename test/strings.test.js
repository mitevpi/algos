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

test("Strings.removeNonAlphaNumeric", () => {
  const res = Strings.removeNonAlphaNumberic("<3a'{} th;i1ng(> /|~`|p:ath2");
  expect(res).toBe("3athi1ngpath2");
});
