export class Numbers {
  /**
   * Get a random integer between the given range.
   * @param {Number} min Minimum extent.
   * @param {Number} max Maximum extent.
   * @returns {Number} The random integer between the min and max input.
   */
  static RandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
   * Get a random float between the given range.
   * @param {Number} min Minimum extent.
   * @param {Number} max Maximum extent.
   * @returns {Number} The random float between the min and max input.
   */
  static RandomFloat(min, max) {
    return +(Math.random() * (max - min) + min);
  }
}
