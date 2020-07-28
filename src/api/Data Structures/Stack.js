export class Stack {
  constructor() {
    this.stack = [];
  }

  /**
   * Get the count of the number of items in the stack.
   * @returns {number} The number of items in the stack.
   */
  get length() {
    return this.stack.length;
  }

  /**
   * Add an item to the top of the stack.
   * @param item The item to add to the stack.
   * @returns {number} The new size of the stack.
   */
  push(item) {
    return this.stack.push(item);
  }

  /**
   * Remove the top item from the stack.
   * @returns {*}
   */
  pop() {
    return this.stack.pop();
  }

  /**
   * Get the item at the top of the stack, without removing it.
   * @returns {*} The item at the top of the stack.
   */
  peek() {
    return this.stack[this.length - 1];
  }

  /**
   * Whether or not the stack is empty.
   * @returns {boolean} Whether or not the stack is empty.
   */
  isEmpty() {
    return this.length === 0;
  }
}
