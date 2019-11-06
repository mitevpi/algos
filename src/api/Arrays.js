export class Arrays {
  /**
   * Find unique items within the array and count frequency of occurrence
   * within the array.
   * @param {Array} array A an array of values (string, number).
   * @returns {Object} Object containing the unique keys of the array, and
   * counts of occurrence in the source array.
   */
  static summarize(array) {
    const returnObj = {};
    array.map(p => {
      returnObj[p] == null ? (returnObj[p] = 1) : (returnObj[p] += 1);
    });
    return returnObj;
  }

  /**
   * Flattens n-nested arrays into one array of values.
   * @param {Array} array A an array containing arrays nested to any amount (n).
   * @returns {Array} A flat array of values/objects extracted from the nested arrays.
   */
  static flatten(arr, result = []) {
    for (let i = 0, { length } = arr; i < length; i++) {
      const value = arr[i];
      if (Array.isArray(value)) {
        this.flatten(value, result);
      } else {
        result.push(value);
      }
    }
    return result;
  }
}
