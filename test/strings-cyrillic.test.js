import { StringsCyrillic } from "../src";

const textA =
  "Една лятна вечер ние с дяда Въля, стария горски стражар, седяхме под големите орехи край село. " +
  "Слънцето потъваше зад горите на Разбойна и насреща по сините зъбери на Балкана догаряха пурпурните огньове ";

test("import StringsCyrillic", () => {
  expect.anything(StringsCyrillic);
});

test("Strings.allWords", () => {
  const res = StringsCyrillic.allWords(textA);
  expect(res.length).toBeGreaterThanOrEqual(10);
});
