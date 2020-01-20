import { Strings } from "./Strings";

export class StringsLatin extends Strings {
  /**
   * Get an array of all the words from a monolithic string.
   * @param str The string to break up into individual words.
   * @returns {RegExpMatchArray} An array of individual words.
   */
  static allWords(str) {
    return this.checkNull(str).match(/[A-Za-z]+/g);
  }

  /**
   * Remove non-alpha-numeric characters from a string.
   * @param {String} str The string to clean of non-alpha-numeric characters.
   * @returns {String} String without characters that aren't letters or numbers.
   */
  static removeNonAlphaNumeric(str) {
    return this.checkNull(str).replace(/\W/g, "");
  }

  /**
   * Remove non-alphabetic characters from a string.
   * @param {String} str The string to clean of non-alphabetic characters.
   * @returns {String} String with characters which are only EN letters.
   */
  static removeNonAlpha(str) {
    return this.checkNull(str).replace(/([^a-zA-Z])+/g, "");
  }
}
