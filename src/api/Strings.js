export class Strings {
  /**
   * Check whether a string is null/empty and return a workable string.
   * @param {String} str The string to check for null/empty.
   * @returns {String} A full or empty string.
   */
  static checkNull(str) {
    if (str === null || str === "") {
      return "";
    }
    return str.toString();
  }

  /**
   * Remove non-printable (non-ASCII) characters from a string.
   * @param {String} str The string to clean of non-printable characters.
   * @returns {String} String without the non-ASCII characters.
   */
  static removeNonPrintable(str) {
    return this.checkNull(str).replace(/[^\x20-\x7E]/g, "");
  }

  /**
   * Remove non-pathable characters from a string.
   * @param {String} str The string to clean of non-pathable characters.
   * @returns {String} String without the path-breaking characters.
   */
  static removeNonPathable(str) {
    return this.checkNull(str).replace(/[/\\?%*:|"<>]/g, "");
  }

  /**
   * Create a random, unique identifier string.
   * @returns {String} A random string with alpha-numeric characters.
   */
  static createUniqueID() {
    return Math.random().toString(36).slice(2);
  }
}
