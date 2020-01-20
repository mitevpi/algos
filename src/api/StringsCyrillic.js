import { Strings } from "./Strings";

export class StringsCyrillic extends Strings {
  /**
   * Get an array of all the Cyrillic words from a monolithic string.
   * @param str The string to break up into individual words.
   * @returns {RegExpMatchArray} An array of individual Cyrillic words.
   */
  static allWords(str) {
    return this.checkNull(str).match(/[А-Яа-я]+/g);
  }
}
