export class Triple {
  // Using the 'static' keyword creates a method which is associated
  // with a class, but not with an instance of the class.

  /**
   * Triple the number.
   * @param {Number} n A number to triple.
   * @returns {Number} The tripled number.
   */
  static triple(n) {
    return n * 3;
  }
}

// super.prop in this example is used for accessing super-properties from
// a parent class. This works fine in static methods too:
export class BiggerTriple extends Triple {
  /**
   * Triple the number twice.
   * @param {Number} n A number to triple.
   * @returns {Number} The bigger tripled number
   */
  static triple(n) {
    return super.triple(n) * super.triple(n);
  }
}
