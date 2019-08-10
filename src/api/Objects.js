export class Objects {
  static GroupBy(xs, key) {
    return xs.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

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
