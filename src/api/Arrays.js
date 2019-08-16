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

  // static parseFileType(name) {
  //   const parsed = name.split(".");
  //   return parsed.slice(-1).pop();
  // }

  static hierarchyFromFlat(data) {
    const dataMap = data.reduce((map, node) => {
      map[node.name] = node;
      return map;
    }, {});

    // create the tree array
    const treeData = [];
    data.forEach(node => {
      // add to parent
      const parent = dataMap[node.parent];
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
