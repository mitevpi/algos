export class Numbers {
  /**
   * Get a random integer between the given range.
   * @param {Number} min Minimum extent.
   * @param {Number} max Maximum extent.
   * @returns {Number} The random integer between the min and max input.
   */
  static randomInt(min, max) {
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
  static randomFloat(min, max) {
    return +(Math.random() * (max - min) + min);
  }

  /**
   * Normalize a number between 0 and 1 based on a known minimum and maximum value.
   * @param {Number} val The value to normalize.
   * @param {Number} min Minimum extent.
   * @param {Number} max Maximum extent.
   * @returns {Number} The random float between the min and max input.
   */
  static normalize(val, min, max) {
    return (val - min) / (max - min);
  }

  /**
   * Normalize a number between a custom range (max,min) based on a known minimum and maximum value
   * of the original dataset.
   * @param {Number} val The value to normalize.
   * @param {Number} minOriginal The minimum extent in the original range.
   * @param {Number} maxOriginal The maximum extent in the original range.
   * @param {Number} minNew The minimum extent in the new, custom range.
   * @param {Number} maxNew The maximum extent in the new, custom range.
   * @returns {Number}
   */
  static normalizeToRange(val, minOriginal, maxOriginal, minNew, maxNew) {
    return (
      ((val - minOriginal) * (maxNew - minNew)) / (maxOriginal - minOriginal) +
      minNew
    );
  }
}
