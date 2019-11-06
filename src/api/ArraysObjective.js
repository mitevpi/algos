import { Arrays } from "./Arrays";

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
