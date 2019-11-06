import { Arrays } from "./Arrays";

export class ArraysNumerical extends Arrays {
  /**
   * Sum the values of an array.
   * @param {Number[]} array A an array of values to sum.
   * @returns {Number} The sum of values in the array.
   */
  static sum(array) {
    return array.reduce((a, b) => +a + +b, 0);
  }

  /**
   * Get the maximum value in the array.
   * @param {Number[]} array A an array of numerical values.
   * @returns {Number} The maximum of the values in the array.
   */
  static max(array) {
    let len = array.length;
    let max = -Infinity;
    while (len--) {
      if (array[len] > max) {
        max = array[len];
      }
    }
    return max;
  }

  /**
   * Get the minimum value in the array.
   * @param {Number[]} array A an array of numerical values.
   * @returns {Number} The minimum of the values in the array.
   */
  static min(array) {
    let len = array.length;
    let min = Infinity;
    while (len--) {
      if (array[len] < min) {
        min = array[len];
      }
    }
    return min;
  }
}
