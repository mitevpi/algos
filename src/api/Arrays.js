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
    array.map((p) => {
      returnObj[p] == null ? (returnObj[p] = 1) : (returnObj[p] += 1);
    });
    return returnObj;
  }

  /**
   * Chunk one flat array into a series of arrays of a certain size.
   * @param {Array} array A an array of values (string, number, etc.).
   * @param {Number} size The size of chunks to split the array into.
   * @returns {Array[]} An array containing arrays of the specified size, containing
   * the original data from the flat array.
   */
  static chunk(array, size) {
    if (!array) return [];
    const firstChunk = array.slice(0, size); // create the first chunk of the given array
    if (!firstChunk.length) {
      return array; // this is the base case to terminal the recursive
    }
    return [firstChunk].concat(
      this.chunk(array.slice(size, array.length), size)
    );
  }

  /**
   * Flattens n-nested arrays into one array of values.
   * @param {Array} array A an array containing arrays nested to any amount (n).
   * @returns {Array} A flat array of values/objects extracted from the nested arrays.
   */
  static flatten(array, result = []) {
    for (let i = 0, { length } = array; i < length; i++) {
      const value = array[i];
      if (Array.isArray(value)) {
        this.flatten(value, result);
      } else {
        result.push(value);
      }
    }
    return result;
  }
}
