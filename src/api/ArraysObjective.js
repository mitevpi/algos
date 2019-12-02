import { Arrays } from "./Arrays";
import { Numbers } from "./Numbers";

export class ArraysObjective extends Arrays {
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
   * @returns {Object[]} Array of objects sorted by the key's value across occurrences.
   */
  static sortBy(array, key, descending = true) {
    return array.sort((a, b) => {
      if (descending === false) {
        return a[key] - b[key];
      }
      return b[key] - a[key];
    });
  }

  /**
   * Get the minimum value of a key in an array containing objects with that key.
   * @param {Array} array A an array containing objects.
   * @param {String} key A key which exists in the objects in the array, with associated numerical values.
   * @returns {Number} The minimum value of all the keys in the object array.
   */
  static min(array, key) {
    return array.reduce(
      (min, p) => (+p[key] < min ? +p[key] : min),
      +array[0][key]
    );
  }

  /**
   * Get the maximum value of a key in an array containing objects with that key.
   * @param {Array} array A an array containing objects.
   * @param {String} key A key which exists in the objects in the array, with associated numerical values.
   * @returns {Number} The maximum value of all the keys in the object array.
   */
  static max(array, key) {
    return array.reduce(
      (max, p) => (+p[key] > max ? +p[key] : max),
      +array[0][key]
    );
  }

  /**
   * Normalize the values in an object array associated with a specific key between 0 and 1 based on the
   * minimums and maximums contained in the object array by that key.
   * @param {Array} array A an array containing objects.
   * @param {String} key A key which exists in the objects in the array, with associated numerical values.
   * @returns {Array} The modified object array.
   */
  static normalizeByKey(array, key) {
    const max = this.max(array, key);
    const min = this.min(array, key);

    array.map(obj => {
      obj[key] = Numbers.normalize(+obj[key], min, max);
    });
    return array;
  }

  /**
   * Normalize the values in an object array associated with specific keys between 0 and 1 based on the
   * minimums and maximums contained in the object array by those keys.
   * @param {Array} array A an array containing objects.
   * @param {String[]} keys An array of keys which exists in the objects in the array, with associated numerical values.
   * @returns {Array} The modified object array.
   */
  static normalizeByKeys(array, keys) {
    keys.map(key => {
      const max = this.max(array, key);
      const min = this.min(array, key);

      array.map(obj => {
        obj[key] = Numbers.normalize(+obj[key], min, max);
      });
    });

    return array;
  }

  /**
   * Normalize all the values in an object array associated with keys which have numerical value pairs
   * between 0 and 1 based on the minimums and maximums contained in the object array by those keys.
   * @param {Array} array A an array containing objects.
   * @returns {Array} The modified object array.
   */
  static normalizeAuto(array) {
    const keys = Object.keys(array[0]);
    const newKeys = [];

    keys.map(key => {
      if (Number.isNaN(+array[0][key])) {
        // nothing
      } else {
        newKeys.push(key);
      }
    });

    newKeys.map(key => {
      const max = this.max(array, key);
      const min = this.min(array, key);

      array.map(obj => {
        obj[key] = Numbers.normalize(+obj[key], min, max);
      });
    });

    return array;
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
