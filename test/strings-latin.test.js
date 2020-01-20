import { StringsLatin } from "../src";

test("import StringsLatin", () => {
  expect.anything(StringsLatin);
});

test("Strings.removeNonAlphaNumeric", () => {
  const res = StringsLatin.removeNonAlphaNumeric(
    "<3a'{} th;i1ng(> /|~`|p:ath2"
  );
  expect(res).toBe("3athi1ngpath2");
});

test("Strings.removeNonAlpha", () => {
  const res = StringsLatin.removeNonAlpha("<3a'{} th;i1ng(> /|~`|p:ath2");
  expect(res).toBe("athingpath");
});
