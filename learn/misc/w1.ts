// Removed: `import { log } from "console";` - `console.log` is globally available.

// --- Section 1: Basic Types and Variables ---

/**
 * @section Basic Types and Variables
 * Demonstrates the declaration and usage of fundamental TypeScript data types:
 * string, boolean, number, any.
 * Also showcases simple variable operations and mutations.
 */

/**
 * 0. String Typing
 * Declares string variables and concatenates them.
 */
const FirstName: string = "Adam";
const LastName: string = "Mickiewicz";
const FullName: string = `${FirstName} ${LastName}`; // Using template literals for readability
console.log(`Full Name: ${FullName}`);

/**
 * 1. Boolean Typing (Attempting unsafe type assertion)
 * This example demonstrates an unsafe type assertion (`as unknown as boolean`).
 * It forces TypeScript to treat a string as a boolean, which can lead to unexpected runtime behavior.
 * In JavaScript/TypeScript, a non-empty string like "false" is considered truthy.
 */
let booleanVal: boolean = true;
const booleanStrVal: string = "false"; // This is the string literal "false"
// `as unknown as boolean` - This type assertion tells TypeScript to bypass type checking.
// It should only be used when you are absolutely certain the conversion is safe at runtime.
// Here, the string "false" is NOT the boolean `false`.
booleanVal = booleanStrVal as unknown as boolean;
console.log("booleanVal (after assertion): " + booleanVal); // Output: "false" (the string, not the boolean)

/**
 * 2. Correctly Converting String to Boolean
 * Demonstrates the correct way to convert a string to a boolean using `Boolean()`.
 * Note: `Boolean("false")` evaluates to `true` because it's a non-empty string.
 */
let booleanVal2: boolean = true;
const booleanStrVal2: string = "false";
// `Boolean(value)` - A global function that converts a value to a boolean type.
// In JavaScript/TypeScript:
// - Falsy values: "", 0, null, undefined, NaN are `false`.
// - Truthy values: Non-empty strings (e.g., "false", "0", " "), non-zero numbers are `true`.
// Therefore, `Boolean("false")` returns `true`.
booleanVal2 = Boolean(booleanStrVal2);
console.log("booleanVal2 (after Boolean()): " + booleanVal2); // Output: true (the boolean)

/**
 * 3. `any` Type and Number Operations
 * The `any` type allows a variable to hold values of any type, bypassing TypeScript's type checking.
 * Demonstrates a simple mathematical operation on a number.
 */
let anyVar: any = 54.3; // 'any' allows assigning any type
// `Math.round()` - Rounds a number to the nearest integer.
anyVar = Math.round(anyVar); // Mutates `anyVar`
console.log("anyVar (after rounding): " + anyVar);

// --- Section 2: Arrays and Their Methods ---

/**
 * @section Arrays and Their Methods
 * Demonstrates array declaration and key array methods in JavaScript/TypeScript.
 * Highlights whether a method mutates (changes) the original array or returns a new one.
 */

const arrStr: string[] = [
  "abc",
  "cde",
  "fgh",
  "ijk",
  "asdd23",
  "asdd234",
  "asdd623",
];
const arrStr2: string[] = [
  "1abc",
  "1cde",
  "1fgh,",
  "1ijk",
  "1asdd23",
  "11133",
  "111",
];

console.log("\n--- Array Methods (Part 1) ---");

/**
 * `.map()` - Does NOT mutate the original array.
 * Creates and returns a NEW array where each element is the result of
 * applying a provided function to each element of the original array.
 */
console.log("\n--- .map() ---");
console.log(
  "arrStr (map to uppercase): " + arrStr.map((item) => item.toUpperCase()),
);
console.log("arrStr after map(): " + arrStr); // arrStr remains unchanged

/**
 * `.filter()` - Does NOT mutate the original array.
 * Creates and returns a NEW array containing only elements for which
 * the provided callback function returns `true`.
 */
console.log("\n--- .filter() ---");
console.log(
  "arrStr (words with > 3 chars): " + arrStr.filter((item) => item.length > 3),
);
console.log("arrStr after filter(): " + arrStr); // arrStr remains unchanged

/**
 * Array element modification by index - MUTATES the array.
 * Direct assignment to an index changes the element in the original array.
 * Important: `const` for an array means the array reference cannot be reassigned,
 * but its contents (elements) can still be modified.
 */
console.log("\n--- Modification by Index ---");
arrStr[7] = "added"; // Adds an element at index 7 (if it doesn't exist, expands array)
console.log('arrStr after arrStr[7] = "added": ' + arrStr); // arrStr is now longer and includes "added"

/**
 * `.at()` - Does NOT mutate the array.
 * Returns the element at a specified index. Supports negative indices (counting from the end).
 */
console.log("\n--- .at() ---");
console.log("arrStr.at(0): " + arrStr.at(0));
console.log("arrStr.at(-1): " + arrStr.at(-1)); // Returns the last element

/**
 * `.concat()` - Does NOT mutate the original arrays.
 * Creates and returns a NEW array that is a concatenation of two or more arrays.
 */
console.log("\n--- .concat() ---");
console.log("arrStr.concat(arrStr2): " + arrStr.concat(arrStr2));
console.log("arrStr after concat(): " + arrStr); // arrStr and arrStr2 remain unchanged

/**
 * `.copyWithin()` - MUTATES the array.
 * Copies a sequence of array elements to another position within the same array.
 * Does not change the length of the array.
 */
console.log("\n--- .copyWithin() ---");
const arrCopyWithinTest = ["a", "b", "c", "d", "e", "f"];
console.log("Original arrCopyWithinTest: " + arrCopyWithinTest);
arrCopyWithinTest.copyWithin(0, 3, 6); // Copies elements from index 3 up to (but not including) 6 (d, e, f)
// and pastes them starting from index 0.
console.log("arrCopyWithinTest.copyWithin(0, 3, 6): " + arrCopyWithinTest); // arrCopyWithinTest has been modified

/**
 * `.entries()` - Does NOT mutate the array.
 * Returns a new Array Iterator object that contains key/value pairs for each index in the array.
 * Often used in `for...of` loops.
 */
console.log("\n--- .entries() ---");
for (const [index, value] of arrStr.entries()) {
  console.log(`${index}: ${value}`);
}

/**
 * 5. Array Content Checking Methods
 */

/**
 * `.every()` - Does NOT mutate the array.
 * Returns `true` if the provided callback function returns `true` for ALL elements in the array.
 */
console.log("\n--- .every() ---");
console.log(
  "arrStr.every(item => item.length > 3): " +
    arrStr.every((item) => item.length > 3),
);

/**
 * `.some()` - Does NOT mutate the array.
 * Returns `true` if the provided callback function returns `true` for AT LEAST ONE element in the array.
 */
console.log("\n--- .some() ---");
console.log(
  "arrStr.some(item => item.length > 3): " +
    arrStr.some((item) => item.length > 3),
);

/**
 * `.find()` - Does NOT mutate the array.
 * Returns the FIRST element in the array that satisfies the provided testing function.
 * Returns `undefined` if no elements satisfy the condition.
 */
console.log("\n--- .find() ---");
console.log(
  "arrStr.find(item => item.length > 3): " +
    arrStr.find((item) => item.length > 3),
);

/**
 * `.findIndex()` - Does NOT mutate the array.
 * Returns the INDEX of the first element in the array that satisfies the provided testing function.
 * Returns `-1` if no elements satisfy the condition.
 */
console.log("\n--- .findIndex() ---");
console.log(
  "arrStr.findIndex(item => item.length > 3): " +
    arrStr.findIndex((item) => item.length > 3),
);

/**
 * `.sort()` - MUTATES the array.
 * Sorts the elements of an array in place and returns the sorted array.
 * By default, it sorts as strings. For numbers, a compare function is needed.
 */
console.log("\n--- .sort() ---");
const numbersToSort = [10, 2, 100, 20, 5];
console.log("Original numbersToSort: " + numbersToSort);
// Numeric ascending sort (a-b for ascending, b-a for descending)
numbersToSort.sort((a, b) => a - b);
console.log("numbersToSort.sort() (numerically): " + numbersToSort); // numbersToSort has been modified

// --- Other Important Array Methods ---

/**
 * `.forEach()` - Does NOT mutate the array.
 * Executes a provided callback function once for each array element.
 * Does not return any value (returns `undefined`).
 */
console.log("\n--- .forEach() ---");
console.log("Iteration with .forEach():");
arrStr.forEach((item, index) => {
  console.log(`Element ${index}: ${item}`);
});
console.log("arrStr after forEach(): " + arrStr); // arrStr remains unchanged

/**
 * `.reduce()` - Does NOT mutate the array.
 * Executes a "reducer" callback function on each element of the array (from left to right),
 * resulting in a single output value.
 */
console.log("\n--- .reduce() ---");
const sumOfLengths = arrStr.reduce(
  (accumulator, currentValue) => accumulator + currentValue.length,
  0,
);
console.log("Sum of string lengths in arrStr (reduce): " + sumOfLengths);
const combinedString = arrStr.reduce((acc, val) => acc + " " + val);
console.log("Combined strings from arrStr (reduce): " + combinedString);
console.log("arrStr after reduce(): " + arrStr); // arrStr remains unchanged

/**
 * `.push()` - MUTATES the array.
 * Adds one or more elements to the end of an array and returns the new length of the array.
 */
console.log("\n--- .push() ---");
const pushArray = ["apple", "banana"];
console.log("Original pushArray: " + pushArray);
const newLength = pushArray.push("orange", "grape");
console.log("pushArray after push(): " + pushArray); // pushArray has been modified
console.log("New length: " + newLength);

/**
 * `.pop()` - MUTATES the array.
 * Removes the LAST element from an array and returns that removed element.
 */
console.log("\n--- .pop() ---");
const popArray = ["one", "two", "three"];
console.log("Original popArray: " + popArray);
const removedElement = popArray.pop();
console.log("popArray after pop(): " + popArray); // popArray has been modified
console.log("Removed element: " + removedElement);

/**
 * `.shift()` - MUTATES the array.
 * Removes the FIRST element from an array and returns that removed element.
 */
console.log("\n--- .shift() ---");
const shiftArray = ["first", "second", "third"];
console.log("Original shiftArray: " + shiftArray);
const shiftedElement = shiftArray.shift();
console.log("shiftArray after shift(): " + shiftArray); // shiftArray has been modified
console.log("Removed element: " + shiftedElement);

/**
 * `.unshift()` - MUTATES the array.
 * Adds one or more elements to the BEGINNING of an array and returns the new length of the array.
 */
console.log("\n--- .unshift() ---");
const unshiftArray = ["middle", "last"];
console.log("Original unshiftArray: " + unshiftArray);
const newUnshiftLength = unshiftArray.unshift("new_first", "new_second");
console.log("unshiftArray after unshift(): " + unshiftArray); // unshiftArray has been modified
console.log("New length: " + newUnshiftLength);

/**
 * `.splice()` - MUTATES the array.
 * Changes the contents of an array by removing or replacing existing elements
 * and/or adding new elements in place. Returns an array containing the deleted elements.
 * @param start - The index at which to start changing the array.
 * @param deleteCount - The number of elements to remove.
 * @param items - Elements to add to the array, starting at the `start` index.
 */
console.log("\n--- .splice() ---");
const spliceArray = ["a", "b", "c", "d", "e"];
console.log("Original spliceArray: " + spliceArray);
// Remove 2 elements from index 1 ('b', 'c'), and add 'x', 'y'
const removedSpliceElements = spliceArray.splice(1, 2, "x", "y");
console.log("spliceArray after splice(1, 2, 'x', 'y'): " + spliceArray); // spliceArray has been modified
console.log("Elements removed by splice: " + removedSpliceElements);

/**
 * `.slice()` - Does NOT mutate the array.
 * Returns a SHALLOW COPY of a portion of an array into a new array.
 * The original array remains unchanged.
 * @param start - The index to begin extraction.
 * @param end - The index before which to end extraction (exclusive).
 */
console.log("\n--- .slice() ---");
const sliceArray = ["red", "green", "blue", "yellow", "purple"];
console.log("Original sliceArray: " + sliceArray);
const slicedPart = sliceArray.slice(1, 4); // Copies elements from index 1 up to (but not including) 4
console.log("slicedPart (from index 1 to 3): " + slicedPart); // ['green', 'blue', 'yellow']
console.log("sliceArray after slice(): " + sliceArray); // sliceArray remains unchanged

/**
 * `.indexOf()` - Does NOT mutate the array.
 * Returns the first index at which a given element can be found in the array.
 * Returns -1 if the element is not present.
 */
console.log("\n--- .indexOf() ---");
const searchArray = ["apple", "orange", "apple", "banana"];
console.log("searchArray.indexOf('apple'): " + searchArray.indexOf("apple")); // 0
console.log("searchArray.indexOf('grape'): " + searchArray.indexOf("grape")); // -1

/**
 * `.lastIndexOf()` - Does NOT mutate the array.
 * Returns the last index at which a given element can be found in the array.
 * Returns -1 if the element is not present.
 */
console.log("\n--- .lastIndexOf() ---");
console.log(
  "searchArray.lastIndexOf('apple'): " + searchArray.lastIndexOf("apple"),
); // 2

/**
 * `.includes()` - Does NOT mutate the array.
 * Returns a boolean (true/false) indicating whether an array contains a certain element.
 */
console.log("\n--- .includes() ---");
console.log(
  "searchArray.includes('orange'): " + searchArray.includes("orange"),
); // true
console.log("searchArray.includes('kiwi'): " + searchArray.includes("kiwi")); // false

/**
 * `.join()` - Does NOT mutate the array.
 * Creates and returns a new string by concatenating all of the elements in an array.
 * An optional separator can be specified.
 */
console.log("\n--- .join() ---");
const joinArray = ["alpha", "beta", "gamma"];
console.log("joinArray.join('-'): " + joinArray.join("-")); // "alpha-beta-gamma"
console.log("joinArray after join(): " + joinArray); // joinArray remains unchanged

console.log("\n--- FINAL STATE OF arrStr ---");
// Displaying the final state of arrStr, which was mutated by:
// arrStr[7] = "added";
// arrStr.copyWithin(0, 3, 6); // Previous usage that affected arrStr
// arrStr.sort(); // If it was used directly on arrStr at some point
console.log("final arrStr[]: " + arrStr);

// --- Section 3: Object Types, Aliases, and Interfaces ---

/**
 * @section Object Types, Aliases, and Interfaces
 * Examples of defining and using data structures in TypeScript.
 */

/**
 * 1. Variable Declarations with Explicit Typing
 * Demonstrates basic variable declaration with type annotations.
 */
let nameVar: string = "Mateusz";
const age: number = 22;
const isStudent: boolean = true;

// let num: number = 23;
// nameVar = num; // This line would cause a compile-time error (TS2322):
//                // Type 'number' is not assignable to type 'string'.
//                // TypeScript catches the type mismatch during compilation.

/**
 * 2. String Concatenation with Numbers (Type Coercion)
 * Explains how the `+` operator behaves in JavaScript/TypeScript when mixing strings and numbers.
 * JavaScript performs "type coercion" (automatic type conversion).
 */
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "cherry"];

// In JavaScript/TypeScript, the `+` operator acts as either numeric addition OR string concatenation.
// If one of the operands is a string (and the other is not an object), the non-string operand
// is converted to a string, and then concatenation occurs.
console.log(`Adding string: ${fruits[0]} to number ${numbers[0]} `);
console.log(`Result: ${numbers[0] + fruits[0]}`); // Output: "1apple" (number 1 becomes string "1", then concatenated)

// Same logic applies here, extending the concatenated string
console.log(`Adding string: ${fruits[0]} to "${numbers[0] + fruits[0]}" `);
console.log(`Result: ${numbers[0] + fruits[0] + " to " + fruits[0]} `); // Output: "1apple to apple"

// No error is reported by TypeScript because this behavior is consistent with JavaScript's
// implicit type conversion ("type coercion"), though it can lead to unexpected results.

/**
 * 3. Objects with `any` Type - Lacks Structure Checking
 * Using `any` for objects bypasses TypeScript's structural type checking,
 * allowing properties to be added dynamically at runtime without compiler warnings.
 */
let personExample: any = {
  name: "Adrian",
  age: 2,
  city: "Warszawa",
};

let personSecondExample: any = {
  name: "Adrian",
  age: 22,
  city: "Warszawa",
};

// With `any` type, we can add new properties at runtime without any TypeScript warnings.
personExample.street = "Kwiatowa";
console.log("personExample (with 'street' added):", personExample);
personSecondExample.street = "Kwiatowa";
console.log("personSecondExample (with 'street' added):", personSecondExample);

// --- Section 4: Interfaces and Type Aliases ---

/**
 * @section Interfaces and Type Aliases
 * Defines object structures using interfaces and creates type aliases.
 * Also demonstrates interface inheritance.
 */

/**
 * 1. Interfaces and Optional Properties
 * Defines an interface `Product` with required and optional properties.
 * Optional properties are marked with `?`.
 */
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // Optional property (may or may not be present)
}

let product1: Product = {
  id: 1,
  name: "Milk",
  price: 2.99,
};

let product2: Product = {
  id: 2,
  name: "Bread",
  price: 1.99,
  description: "Brown", // Optional property is provided
};

console.log("Product 1:", product1);
console.log("Product 2:", product2);

let productArray: Product[] = [product1, product2];
console.log("\nIterating through product array:");
for (let i = 0; i < productArray.length; i++) {
  console.log(
    `- Name: ${productArray[i].name}, Price: ${productArray[i].price}`,
  );
}

/**
 * Extra: Extending Objects with the Spread Operator (`...`)
 * The spread operator creates a NEW object by copying all properties from an existing object
 * and then adding/overwriting new ones. The original object remains unchanged.
 */
const product3: Product = {
  id: 3,
  name: "Chocolate",
  price: 3.99,
  description: "Chocolate",
};

const extendedProduct = {
  ...product3, // Copies id, name, price, description from product3
  kcal: 300, // Adds a new property 'kcal'
};
console.log("\nExtended Product (extendedProduct):", extendedProduct);

/**
 * 2. Type Aliases - Simple Aliases for Types
 * Defines a new type alias `ID` for the `number` type.
 */
type ID = number;
let userID: ID = 1;
console.log("User ID (type alias):", userID);

/**
 * 3. Type Aliases for Union Types or Literals
 * Defines a `Status` type that can only hold one of three specified string literal values.
 */
type Status = "available" | "unavailable" | "ordered";
let statusVar: Status = "available";
console.log("Product Status (literal type):", statusVar);
// statusVar = "pending"; // This line would cause a type error: "Type '"pending"' is not assignable to type 'Status'."

/**
 * 4. Interface Inheritance
 * Demonstrates how one interface can extend another, inheriting its properties.
 */
interface Person {
  name: string;
  surname: string;
}

// `Employee` extends `Person`, adding its own specific properties.
interface Employee extends Person {
  position: string;
  salary: number;
}

let employee1: Employee = {
  name: "Adam",
  surname: "Mickiewicz",
  position: "writer",
  salary: 3000,
};

console.log("Employee Data (interface inheritance):", employee1);

// --- Section 5: Functions and Their Typing ---

/**
 * @section Functions and Their Typing
 * Examples of defining functions in TypeScript, including typing parameters,
 * return values, optional parameters, and the `void` type.
 */

/**
 * 1. Basic Functions with Parameter and Return Value Typing
 * Defines functions with explicit types for parameters and return values.
 */
function add(a: number, b: number): number {
  // Parameters `a`, `b` are `number`, function returns `number`
  return a + b;
}
console.log("Addition Result (1+2):", add(1, 2));
// console.log(add(1, "2")); // This would cause a compile-time error:
// TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.

function welcome(name: string): string {
  // Parameter `name` is `string`, function returns `string`
  return "Hello, " + name;
}
console.log("Greeting:", welcome("Mateusz"));

/**
 * 2. Functions with Optional Parameters
 * Demonstrates an optional parameter (`taxRate?`), which can be `undefined` if not provided.
 * Includes logic to assign a default value.
 */
function calculateTax(amount: number, taxRate?: number): number {
  // Check if `taxRate` is null or undefined, and assign a default if so.
  // An alternative is using the nullish coalescing operator `??` for conciseness:
  // const actualTaxRate = taxRate ?? 0.23;
  // return amount * actualTaxRate;
  if (taxRate === null || taxRate === undefined) {
    taxRate = 0.23;
  }
  return amount * taxRate;
}
console.log("Tax on 100 (rate 0.1):", calculateTax(100, 0.1));
console.log("Tax on 100 (default rate):", calculateTax(100));

/**
 * 3. Functions Returning `void`
 * A function returning `void` indicates that it does not return any meaningful value.
 */
function logMsg(msg: string): void {
  console.log("Message to log:", msg);
}

logMsg("Hello");
logMsg(String(123)); // Convert number to string before passing

// --- Section 6: Union Types and Interfaces for Functions ---

/**
 * @section Union Types and Interfaces for Functions
 * Shows the use of union types for variables and function parameters,
 * and an interface for defining a function contract.
 */

/**
 * 1. Union Type for Variables
 * A `union type` allows a variable to hold a value of one of several specified types.
 */
let userId: string | number; // Union type: can be `string` OR `number`
userId = "123";
console.log("User ID (string):", userId);
userId = 123;
console.log("User ID (number):", userId);

/**
 * Function accepting a union type parameter.
 */
function showInfo(data: string | number | boolean) {
  console.log("Displayed Information:", data);
}
showInfo("Cat has a cat"); // Assuming "Ala ma kota" translated
showInfo(42);
showInfo(true);

/**
 * 2. Interfaces for Functions (Function Contract)
 * An interface can define the signature (contract) of a function.
 * `Loggable` requires any implementing object to have a `log` method.
 */
interface Loggable {
  log(msg: string): void;
}

// An object implementing the `Loggable` interface.
const myLogger: Loggable = {
  log: (message: string) => {
    console.log("Custom Logger:", message);
  },
};
myLogger.log("This is a message from the custom logger.");

// --- Section 7: Advanced Classes and Interfaces (Shapes) ---

/**
 * @section Advanced Classes and Interfaces (Shapes)
 * Examples of interfaces, abstract classes, and inheritance in TypeScript,
 * demonstrating polymorphism and encapsulation using getters/setters.
 */

// --- Interface Definitions ---

/**
 * @interface Drawable
 * Defines a contract for objects that can be "drawn".
 * Requires the implementation of the `draw()` method.
 */
interface Drawable {
  draw(): void;
}

// --- Abstract and Base Class Definitions ---

/**
 * @abstract class Shape
 * Abstract base class for all geometric shapes.
 * Implements common properties and methods, and defines abstract methods
 * that *must* be implemented by derived classes.
 * An abstract class cannot be instantiated directly (cannot create an object from it).
 */
abstract class Shape {
  /**
   * @param name - The name of the shape. It's a `protected` property,
   * meaning it's accessible within this class and its derived classes.
   * By using 'protected' in the constructor parameter, TypeScript
   * automatically creates and initializes the `name` property.
   * Has a default value of "Shape" if not provided.
   */
  constructor(protected name: string = "Shape") {
    // Constructor body for the base class. Additional common initialization
    // logic for all shapes could be added here.
  }

  /**
   * @abstract calcArea()
   * An abstract method that *must* be implemented by every inheriting class.
   * Responsible for calculating the area of the shape.
   * @returns {number} The area of the shape.
   */
  abstract calcArea(): number;

  /**
   * @method getName()
   * Returns the name of the shape.
   * @returns {string} The name of the shape.
   */
  getName(): string {
    return this.name;
  }
}

// --- Concrete Shape Class Definitions ---

/**
 * @class Square
 * Represents a square, inheriting from `Shape` and implementing `Drawable`.
 */
class Square extends Shape implements Drawable {
  /**
   * @param name - The name of the square, passed to the base class `Shape` constructor.
   * @param side - The length of the square's side. This is a `private` property,
   * automatically created and initialized by TypeScript
   * due to the 'private' modifier in the constructor parameter.
   * Has a default value of 0 if not provided.
   */
  constructor(
    name: string,
    private side: number = 0,
  ) {
    super(name); // Call the base class `Shape` constructor
    // No need for 'this.side = side;' - handled by 'private side' in parameter
  }

  /**
   * @method calcArea()
   * Implementation of the abstract method from the `Shape` base class.
   * Calculates the area of the square.
   * @returns {number} The area of the square.
   */
  calcArea(): number {
    return this.side * this.side;
  }

  /**
   * @method draw()
   * Implementation of the method from the `Drawable` interface.
   * Simulates drawing a square.
   */
  draw(): void {
    console.log("Drawing a square.");
  }

  /**
   * @method getSide()
   * Public "getter" for the private `side` property.
   * Allows safe reading of the square's side length from outside the class.
   * @returns {number} The length of the square's side.
   */
  getSide(): number {
    return this.side;
  }

  /**
   * @method setSide()
   * Public "setter" for the private `side` property.
   * Allows safe modification of the square's side length from outside the class.
   * Validation logic can be added here, e.g., to prevent setting a negative value.
   * @param side - The new side length.
   */
  setSide(side: number): void {
    // Example validation:
    if (side < 0) {
      console.warn("Side length cannot be negative. Value not changed.");
      return;
    }
    this.side = side;
  }
}

/**
 * @class Circle
 * Represents a circle, inheriting from `Shape` and implementing `Drawable`.
 */
class Circle extends Shape implements Drawable {
  /**
   * @param name - The name of the circle, passed to the base class `Shape` constructor.
   * @param radius - The length of the circle's radius. A private property, automatically
   * created and initialized. Default value is 0.
   */
  constructor(
    name: string,
    private radius: number = 0,
  ) {
    super(name); // Call the base class `Shape` constructor
  }

  /**
   * @method calcArea()
   * Implementation of the abstract method from the `Shape` base class.
   * Calculates the area of the circle.
   * @returns {number} The area of the circle.
   */
  calcArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  /**
   * @method draw()
   * Implementation of the method from the `Drawable` interface.
   * Simulates drawing a circle.
   */
  draw(): void {
    console.log("Drawing a circle.");
  }

  /**
   * @method getRadius()
   * Public "getter" for the private `radius` property.
   * @returns {number} The length of the circle's radius.
   */
  getRadius(): number {
    return this.radius;
  }

  /**
   * @method setRadius()
   * Public "setter" for the private `radius` property.
   * @param radius - The new radius length.
   */
  setRadius(radius: number): void {
    // Example validation:
    if (radius < 0) {
      console.warn("Radius cannot be negative. Value not changed.");
      return;
    }
    this.radius = radius;
  }
}

// --- Example Usage of Classes ---

console.log("--- Creating and Testing Individual Objects ---");

const square = new Square("Square 5x5", 5);
console.log(
  `${square.getName()} | Area: ${square.calcArea().toFixed(2)} | Side: ${square.getSide()}`,
);

const circle = new Circle("Circle R=3", 3);
console.log(
  `${circle.getName()} | Area: ${circle.calcArea().toFixed(2)} | Radius: ${circle.getRadius()}`,
);

console.log("\n--- Modifying Values via Setters ---");
square.setSide(7);
console.log(
  `${square.getName()} (after side change) | Area: ${square.calcArea().toFixed(2)} | New Side: ${square.getSide()}`,
);
circle.setRadius(-1); // Attempt to set an invalid value
console.log(
  `${circle.getName()} (after attempt to change radius to -1) | Radius: ${circle.getRadius()}`,
); // Radius should not change

console.log("\n--- Using Polymorphism with an Array ---");

// An array can hold objects that are both `Shape` and `Drawable`.
const arrShapes: (Shape & Drawable)[] = [];
arrShapes.push(square);
arrShapes.push(circle);
arrShapes.push(new Square("Small Square", 2));
arrShapes.push(new Circle("Large Circle", 7));

for (const shape of arrShapes) {
  // We can call methods from both `Shape` and `Drawable` interfaces.
  console.log(`\n--- Information about ${shape.getName()} ---`);
  shape.draw(); // Method from `Drawable` interface
  console.log(`Area: ${shape.calcArea().toFixed(2)}`); // Method from `Shape` base class

  // If we need specific methods (like getSide() / getRadius()),
  // we must check the object's type using `instanceof`.
  if (shape instanceof Square) {
    console.log(`Side Length (specific to Square): ${shape.getSide()}`);
  } else if (shape instanceof Circle) {
    console.log(`Radius Length (specific to Circle): ${shape.getRadius()}`);
  }
}

// --- Attempting to Instantiate an Abstract Class (Shows Compile-time Error) ---
// const shapeExample: Shape = new Shape("General Shape");
// The line above would cause a TS2511 error: Cannot create an instance of an abstract class.

/**
 * @function maxAdjacentDistance
 * Given a circular array `nums`, finds the maximum absolute difference between adjacent elements.
 * The first and last elements are considered adjacent in a circular array.
 *
 * @param nums - An array of numbers.
 * @returns {number} The maximum absolute difference between adjacent elements.
 * Returns 0 if input constraints are not met.
 *
 * @example
 * // Example 1:
 * // Input: nums = [1,2,4]
 * // Output: 3
 * // Explanation: The maximum absolute difference is between nums[0] and nums[2]: |4 - 1| = 3.
 *
 * @example
 * // Example 2:
 * // Input: nums = [-5,-10,-5]
 * // Output: 5
 * // Explanation: The maximum absolute difference is between nums[0] and nums[1]: |-5 - (-10)| = 5.
 */
function maxAdjacentDistance(nums: number[]): number {
  // Input validation checks for array length and element value range.
  if (
    nums.length < 2 || // Array must have at least 2 elements
    nums.length > 100 || // Array length must not exceed 100
    nums.some((i) => i > 100 || i < -100) // All elements must be between -100 and 100 (inclusive)
  ) {
    console.log(
      `Incorrect input data. Constraints: length >= 2, length <= 100, -100 <= element <= 100.`,
    );
    return 0; // Return 0 for invalid input as per problem statement or a specific error handling
  }

  // Initialize `maxAbsoluteDiff` with the difference between the first and last elements
  // because it's a circular array.
  let maxAbsoluteDiff = Math.abs(nums[0] - nums[nums.length - 1]);

  // Iterate through adjacent elements to find the maximum difference
  for (let i = 0; i < nums.length - 1; i++) {
    const currentCompare = Math.abs(nums[i] - nums[i + 1]);
    if (currentCompare > maxAbsoluteDiff) {
      maxAbsoluteDiff = currentCompare;
    }
  }
  return maxAbsoluteDiff;
}

// --- Moved from another file (commented out as per original) ---

// /**
//  * @function textAnalyzer
//  * Analyzes a given text to count the number of unique words.
//  * Words are split by spaces.
//  * @param text - The input string to analyze.
//  * @returns {number} The count of unique words in the text.
//  */
// export function textAnalyzer(text: string): number {
//     const words = text.split(' ');
//     const uniqueWords = new Set(words);
//     return uniqueWords.size;
// }

// /**
//  * @function log
//  * A utility function for logging messages with different severity levels.
//  * Can be conditionally enabled/disabled based on environment variables (e.g., development mode).
//  * @param message - The message string to log.
//  * @param level - The logging level ('info', 'warn', 'error'). Defaults to 'info'.
//  * @returns {void}
//  */
// export function log(message: string, level: 'info' | 'warn' | 'error' = 'info'): void {
//     // if (process.env.NODE_ENV === 'development') { // Example of environment-based logging control
//         if (level === 'info') {
//             console.log(message);
//         } else if (level === 'warn') {
//             console.warn(message);
//         } else if (level === 'error') {
//             console.error(message);
//         }
//     // }
// }

function multiply(a: number, b: number): number {
  return a * b;
}

async function runMultiplications() {
  const a = 42;
  const b = 73;

  for (let i = 0; i < 1000; i++) {
    multiply(a, b);
  }
}

/**
 * @function delay
 * Returns a promise that resolves after the given number of milliseconds.
 * This can be used to add a delay between operations, for example to
 * space out a set of rapid-fire operations over a period of time.
 * @param ms - The number of milliseconds to wait before resolving the promise.
 * @returns {Promise<void>} A promise that resolves after the given delay.
 */
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * @function runWithTiming
 * Runs a loop that multiplies two numbers 1000 times, with a 1 ms delay between each multiplication.
 * This function is used to demonstrate the effect of adding a delay between operations.
 * @returns {Promise<void>} A promise that resolves when the loop has finished.
 */
async function runWithTiming() {
  const a = 42;
  const b = 73;

  for (let i = 0; i < 1000; i++) {
    multiply(a, b);
    await delay(1); // 1 ms delay to spread 1000 multiplications over 1 second
  }
}

// Run:
// runWithTiming();

/**
 * Finds two elements in an array that sum up to the given target.
 * Returns an array with the indices of the two elements or an empty array if no such pair is found.
 * The array is traversed from left to right, and the first pair found is returned.
 * @param nums The array of numbers to search in.
 * @param target The target sum.
 * @returns An array with two indices or an empty array.
 */
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0, j = 1; i < nums.length - 1; i++, j = i + 1) {
    for (; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

const result = twoSum([2, 7, 11, 14], 25);
console.log(result);

/**
 * Finds two elements in an array that sum up to the given target.
 * Returns an array with the indices of the two elements or an empty array if no such pair is found.
 * The array is traversed from left to right, and the first pair found is returned.
 * @param nums The array of numbers to search in.
 * @param target The target sum.
 * @returns An array with two indices or an empty array.
 */
function twoSumV2(nums: number[], target: number): number[] {
  if (!nums || nums.length < 2) {
    // Dodatkowe sprawdzenie
    return [];
  }

  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
}

/**
 * Calculates the difference between the maximum and minimum possible numbers that can be obtained by changing the digits of the given number.
 * For example, if the input number is 123, the maximum possible number is 963 and the minimum possible number is 023.
 * @param num - The input number.
 * @returns {number} The difference between the maximum and minimum possible numbers.
 */
function minMaxDifference(num: number): number {
  const numString = num.toString();

  const min = numString
    .split("")
    .map((ch) => (ch === numString[0] ? "0" : ch))
    .join("");

  const digitIndexForMax = [...numString].findIndex((ch) => ch !== "9");
  let max = numString;
  if (digitIndexForMax !== -1) {
    max = numString
      .split("")
      .map((ch) => (ch === numString[digitIndexForMax] ? "9" : ch))
      .join("");
  }

  return parseInt(max) - parseInt(min);
}

/**
 * Calculates the difference between the maximum and minimum possible numbers that can be obtained by changing the digits of the given number.
 * @param num - The input number.
 * @returns {number} The difference between the maximum and minimum possible numbers.
 */
function maxDiff(num: number): number {
  const strNum = num.toString();

  // Maksymalizacja — zamień pierwszą nie-9 cyfrę na 9
  let a = strNum;
  for (let ch of strNum) {
    if (ch !== "9") {
      a = strNum.split(ch).join("9");
      break;
    }
  }

  // Minimalizacja — zamień pierwszą cyfrę na 1 lub inne cyfry na 0
  let b = strNum;
  if (strNum[0] !== "1") {
    b = strNum.split(strNum[0]).join("1");
  } else {
    for (let i = 1; i < strNum.length; i++) {
      if (strNum[i] !== "0" && strNum[i] !== "1") {
        b = strNum.split(strNum[i]).join("0");
        break;
      }
    }
  }

  return parseInt(a) - parseInt(b);
}
