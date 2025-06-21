/**
 * Interface representing an object with a `fooProp` string property.
 */
interface i1 {
  fooProp: string;
}

/**
 * Interface with one required (`prop1`) and one optional (`prop2`) numeric property.
 */
interface i2 {
  prop1: number;
  prop2?: number;
}

/**
 * Class representing a person with explicitly declared fields.
 */
class p1 {
  name: string;
  age: number;

  /**
   * Constructs a new `p1` instance.
   * @param name - Person's name.
   * @param age - Person's age.
   */
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

/**
 * Class representing a person using shorthand public field declarations in constructor.
 */
class p2 {
  /**
   * Constructs a new `p2` instance with public properties automatically declared.
   * @param name - Person's name.
   * @param age - Person's age.
   */
  constructor(
    public name: string,
    public age: number,
  ) {}
}

/**
 * Abstract base class for a person with name and age.
 */
abstract class p3 {
  name: string;
  age: number;

  /**
   * Creates a new instance of `p3`.
   * @param name - Person's name.
   * @param age - Person's age.
   */
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

/**
 * Class extending abstract `p3` and implementing interface `i1`.
 */
class p4 extends p3 implements i1 {
  fooProp: string;

  /**
   * Creates a new `p4` instance.
   * @param name - Person's name.
   * @param age - Person's age.
   */
  constructor(name: string, age: number) {
    super(name, age);
    // Default value for `fooProp`
    this.fooProp = "bar";
  }
}

/**
 * Class implementing `i1` with automatic public field creation.
 */
class p5 implements i1 {
  /**
   * Constructs a new `p5` instance.
   * @param name - Person's name.
   * @param age - Person's age.
   * @param fooProp - The required `fooProp` string property.
   */
  constructor(
    public name: string,
    public age: number,
    public fooProp: string,
  ) {}
}

/**
 * Class implementing interface `i2` with optional property support.
 */
class p6 implements i2 {
  /**
   * Constructs a new `p6` instance.
   * @param prop1 - Required numeric property.
   * @param prop2 - Optional numeric property.
   */
  constructor(
    public prop1: number,
    public prop2?: number,
  ) {}
}

/**
 * Example object implementing `i1`.
 */
const person: i1 = {
  fooProp: "bar",
};

/**
 * Constant type identifier.
 */
const type = "t1";

/**
 * Label selected by ternary operator based on `type`.
 */
const label = type === "t1" ? "Label 1" : "Label 2";

/**
 * Alternative label using opposite ternary condition.
 */
const label2 = type !== "t1" ? "Label 1" : "Label 2";

/**
 * Simple user objects with id and name.
 */
const user = {
  id: 1,
  name: "John Doe",
};

const user2 = {
  id: 1,
  name: "John Doe",
};

/**
 * User object with nested balance property.
 */
const user3 = {
  id: 1,
  name: "John Doe",
  balance: {
    usd: 100,
    pln: 7,
  },
};

// Destructuring user3 for id and name
const { id: userId, name: userName } = user3;

// Calculating total money value converting USD to PLN and adding PLN balance
const money = user3.balance.usd * 4.3 + user3.balance.pln;

console.log(userId, userName, money);

/**
 * User object with only id property.
 */
const user4 = {
  id: 1,
};

const idU4 = user4.id;
// Note: `user4.name = "Test";` would work in JavaScript but TypeScript will error
// because `name` is not declared on type inferred from `user4`

/**
 * Object literal matching the structure of class `p5`.
 */
const u5: p5 = {
  name: "John Doe",
  age: 30,
  fooProp: "bar",
};

/**
 * Instantiated object of class `p5`.
 */
const u52: p5 = new p5("John Doe", 30, "bar");

//// ARRAYS practice
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];
arr1.push(4);
arr2.push(4);

arr1.forEach((i) => console.log(i));
arr2.forEach((i) => console.log(i));

const arr3 = arr1.map((i) => i * 2);
arr3.forEach((i) => console.log(i));

const arr4: String[] = ["a", "b", "c"];
const arr5 = arr4.map((i) => i.toUpperCase());
arr5.forEach((i) => console.log(i));
