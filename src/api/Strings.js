export class Strings {
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
   * Remove non-alpha-numeric characters from a string.
   * @param {String} str The string to clean of non-alpha-numeric characters.
   * @returns {String} String without characters that aren't letters or numbers.
   */
  static removeNonAlphaNumberic(str) {
    return this.checkNull(str).replace(/\W/g, "");
  }
}
