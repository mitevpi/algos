import { Stack } from "../../src/api/Data Structures/Stack";

let books = new Stack();

describe("Stack", () => {
  test("import Stack", () => {
    expect.anything(Stack);
    expect(typeof Stack).toBe("function");
  });

  test("it has the members of a Stack", () => {
    expect(typeof books.pop).toBe("function");
    expect(typeof books.length).toBe("number");
    expect(typeof books.push).toBe("function");
    expect(typeof books.peek).toBe("function");
    expect(typeof books.isEmpty).toBe("function");
  });

  test("it can push items to the stack", () => {
    books = new Stack();
    const lengthA = books.length;
    books.push("Book 1");
    books.push("Book 2");
    books.push("Book 3");
    expect(books.length).toBeGreaterThan(lengthA);
    expect(books.length).toBe(3);
  });

  test("it can pop items from the stack", () => {
    books = new Stack();
    books.push("Book 1");
    books.push("Book 2");
    const lengthA = books.length;
    books.pop();
    expect(books.length).toBeLessThan(lengthA);
    expect(books.length).toBe(1);
  });

  test("it can get the stack length", () => {
    books = new Stack();
    books.push("Book 1");
    books.push("Book 2");
    expect(books.length).toBe(2);
  });

  test("it can peek at the top item of the stack", () => {
    books = new Stack();
    books.push("Book 1");
    books.push("Book 2");
    expect(books.peek()).toBe("Book 2");
  });

  test("it can tell if the stack is empty", () => {
    books = new Stack();
    expect(books.isEmpty()).toBe(true);
    books.push("Book 1");
    books.push("Book 2");
    expect(books.isEmpty()).toBe(false);
  });
});
