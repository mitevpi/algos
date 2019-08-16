export class Strings {
  /**
   * Remove non-printable (non-ASCII) characters from a string.
   * @param {String} str The string to clean of non-printable characters.
   * @returns {String} String without the non-ASCII characters.
   */
  static removeNonPrintable(str) {
    if (str === null || str === "") {
      return "";
    }
    return str.toString().replace(/[^\x20-\x7E]/g, "");
  }

  /**
   * Remove non-pathable characters from a string.
   * @param {String} str The string to clean of non-pathable characters.
   * @returns {String} String without the path-breaking characters.
   */
  static removeNonPathable(str) {
    if (str === null || str === "") {
      return "";
    }
    return str.toString().replace(/[/\\?%*:|"<>]/g, "");
  }
}
