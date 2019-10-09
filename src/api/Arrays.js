export class Arrays {
  /**
   * Group an array of objects by similar properties.
   * @param {Object[]} array An array of objects with similar properties.
   * @param {String} key The unique key to group by.
   * @returns {Object} Object containing child objects which contain the individual
   * data points corresponding to the property key used for grouping.
   */
  static groupBy(array, key) {
    return array.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  /**
   * Sort an array of objects with similar properties by a shared key's value.
   * @param {Object[]} array An array of objects with similar properties.
   * @param {String} key The unique key to sort by.
   * @param {Boolean} descending Whether to sort descending (default), or ascending.
   * @returns {Object[]} Array of objects sorted by the key's value across occurances.
   */
  static sortBy(array, key, descending = true) {
    return array.sort((a, b) => {
      switch (descending) {
        case false:
          return a[key] - b[key];
        default:
          return b[key] - a[key];
      }
    });
  }

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

  /**
   * Turn a flat array of objects containing common properties into a nested object
   * hierarchy based on parent/child keys. ex. Folders, File Versions, etc.
   * @param {Object[]} array A an array of objects.
   * @param {String} parentKey The common property of the objects to establish primary identity.
   * @param {String} childKey The common property of the objects to establish parent -> child relationships.
   * @returns {Object[]} An array of objects, nested using the .children accessor based on the
   * parent -> child hierarchy established.
   */
  static hierarchyFromFlat(array, parentKey, childKey) {
    const dataMap = array.reduce((map, node) => {
      map[node[childKey]] = node;
      return map;
    }, {});

    // create the tree array
    const treeData = [];
    array.forEach(node => {
      // add to parent
      const parent = dataMap[node[parentKey]];
      if (parent) {
        // create child array if it doesn't exist
        (parent.children || (parent.children = []))
          // add node to child array
          .push(node);
      } else {
        // parent is null or missing
        treeData.push(node);
      }
    });

    return treeData;
  }
}
