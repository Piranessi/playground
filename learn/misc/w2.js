var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null",
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
/**
 * Class representing a basic person using explicit field definitions.
 */
var p1 = /** @class */ (function () {
  /**
   * Creates a new instance of p1.
   * @param name - The name of the person.
   * @param age - The age of the person.
   */
  function p1(name, age) {
    this.name = name;
    this.age = age;
  }
  return p1;
})();
/**
 * Class representing a basic person using shorthand public field declarations.
 */
var p2 = /** @class */ (function () {
  /**
   * Creates a new instance of p2.
   * @param name - The name of the person.
   * @param age - The age of the person.
   */
  function p2(name, age) {
    this.name = name;
    this.age = age;
  }
  return p2;
})();
/**
 * Abstract base class representing a person with name and age.
 */
var p3 = /** @class */ (function () {
  /**
   * Creates a new instance of p3.
   * @param name - The name of the person.
   * @param age - The age of the person.
   */
  function p3(name, age) {
    this.name = name;
    this.age = age;
  }
  return p3;
})();
/**
 * Class extending p3 and implementing interface i1.
 */
var p4 = /** @class */ (function (_super) {
  __extends(p4, _super);
  /**
   * Creates a new instance of p4.
   * @param name - The name of the person.
   * @param age - The age of the person.
   */
  function p4(name, age) {
    var _this = _super.call(this, name, age) || this;
    _this.fooProp = "bar";
    return _this;
  }
  return p4;
})(p3);
/**
 * Class implementing interface i1 with automatic field creation.
 */
var p5 = /** @class */ (function () {
  /**
   * Creates a new instance of p5.
   * @param name - The name of the person.
   * @param age - The age of the person.
   * @param fooProp - The fooProp value required by i1.
   */
  function p5(name, age, fooProp) {
    this.name = name;
    this.age = age;
    this.fooProp = fooProp;
  }
  return p5;
})();
/**
 * Class implementing interface i2.
 */
var p6 = /** @class */ (function () {
  /**
   * Creates a new instance of p6.
   * @param prop1 - Required numeric property.
   * @param prop2 - Optional numeric property.
   */
  function p6(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }
  return p6;
})();
/**
 * An example object implementing the i1 interface.
 */
var person = {
  fooProp: "bar",
};
/**
 * Constant representing a type identifier.
 */
var type = "t1";
/**
 * Label determined by ternary operation based on `type`.
 */
var label = type === "t1" ? "Label 1" : "Label 2";
/**
 * Alternative label determined by opposite ternary condition.
 */
var label2 = type !== "t1" ? "Label 1" : "Label 2";
var user = {
  id: 1,
  name: "John Doe",
};
var user2 = {
  id: 1,
  name: "John Doe",
};
var user3 = {
  id: 1,
  name: "John Doe",
  balance: {
    usd: 100,
    pln: 7,
  },
};
var userId = user3.id,
  userName = user3.name;
var money = user3.balance.usd * 4.3 + user3.balance.pln;
console.log(userId, userName, money);
