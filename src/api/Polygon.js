export class Polygon {
  // ..and an (optional) custom class constructor. If one is
  // not supplied, a default constructor is used instead:
  // constructor() { }
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }

  // Simple class instance methods using short-hand method
  // declaration

  /**
   * Return name.
   * @returns {String} Sample string.
   */
  sayName() {
    console.log("Hi, I am a ", `${this.name}.`);
    return `${this.name}.`;
  }

  /**
   * Return height.
   * @returns {String} Sample string.
   */
  sayHistory() {
    console.log(
      "Polygon is derived from the Greek polus (many) and gonia (angle).",
      this.name
    );
    return `${this.height}.`;
  }
}

export class Square extends Polygon {
  constructor(length) {
    // The reserved 'super' keyword is for making super-constructor
    // calls and allows access to parent methods.
    //
    // Here, it will call the parent class' constructor with lengths
    // provided for the Polygon's width and height
    super(length, length);
    // Note: In derived classes, super() must be called before you
    // can use 'this'. Leaving this out will cause a reference error.
    this.name = "Square";
  }

  // Getter/setter methods are supported in classes,
  // similar to their ES5 equivalents

  /**
   * Return area.
   * @returns {Number} The Area.
   */
  get area() {
    return this.height * this.width;
  }

  /**
   * Set the area to new number
   * @param {Number} value A number to use to set value.
   */
  set area(value) {
    this.area = value;
  }
}

export class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = "Rectangle";
  }

  // Here, sayName() is a subclassed method which
  // overrides their superclass method of the same name.

  /**
   * Return name.
   * @returns {String} Sample string.
   */
  sayName() {
    console.log("Sup! My name is ", `${this.name}.`);
    super.sayHistory();
  }
}
