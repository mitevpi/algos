export class Arrays {
  static GroupBy(array, key) {
    return array.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  /**
   * Sum the values of an array.
   * @param {Array} array A number to triple.
   * @returns {Number} The sum of values in the array.
   */
  static Sum(array) {
    return array.reduce((a, b) => a + b, 0);
  }

  static Summarize(array) {
    const returnObj = {};
    array.forEach(p => {
      if (returnObj[p] == null) {
        returnObj[p] = 0;
      } else {
        returnObj[p] = returnObj[p] + 1;
      }
    });
    return returnObj;
  }

  // static parseFileType(name) {
  //   const parsed = name.split(".");
  //   return parsed.slice(-1).pop();
  // }

  static HierarchyFromFlat(data) {
    const dataMap = data.reduce((map, node) => {
      map[node.name] = node;
      console.log("MAP", map);
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
