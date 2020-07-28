import { Numbers } from "./Numbers";

const spaceTypes = ["Office", "Meeting", "Support", "Creative", "Circulation"];

export class MockData {
  /**
   * Get a filled array of the corresponding size.
   * @param {Number} size The amount of numbers in the array.
   * @returns {Number[]} A filled array the length of the specified size.
   */
  static range(size) {
    return [...Array(size).keys()];
  }

  /**
   * Create mock data for a circle-packing algorithm.
   * @param size The amount of data points to create
   * @returns {{r: number, spaceType: (string), id: Number}[]} An array of objects which
   * can be used as circles in circle-packing algorithm testing.
   */
  static packData(size) {
    const r = () => Math.random();
    return this.range(size).map((i) => {
      const randomNumber = Math.floor(r() * spaceTypes.length);
      return {
        r: r() * 14 * r() * 2 * r() * 2,
        id: i,
        spaceType: spaceTypes[randomNumber],
      };
    });
  }

  /**
   * Create mock data for a network/graph algorithm.
   * @param size The amount of data points to create
   * @returns {{nodes: {size: Number, x: null, y: null}[], links: {source: number, target: number}[]}} An array
   * of objects which can be used as nodes and connections in network/graph algorithm testing scenarios.
   */
  static networkData(size) {
    return {
      nodes: this.range(size).map(() => ({
        size: Numbers.randomInt(5, 30),
      })),
      links: this.range(size - 1).map((i) => ({
        source: Math.floor(Math.sqrt(i)),
        target: i + 1,
        size: Numbers.randomInt(5, 30),
      })),
    };
  }
}
