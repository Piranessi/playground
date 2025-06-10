"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
//1)
var nameVar = "Mateusz";
var age = 22;
var isStudent = true;
//let num: number = 23;
//nameVar = num; // m2.ts:7:1 - error TS2322: Type 'number' is not assignable to type 'string'.
//2)
var numbers = [1, 2, 3, 4, 5];
var fruits = ["apple", "banana", "cherry"];
console.log("adding string: ".concat(fruits[0], " to number ").concat(numbers[0], " ").concat(numbers[0] + fruits[0]));
console.log("adding string: ".concat(fruits[0], " to number ").concat(numbers[0] + fruits[0], " "));
//in both cases no error, why?
//3
var personExample = {
    name: "Adrian",
    age: 2,
    city: "Warszawa"
};
var personSecondExample = {
    name: "Adrian",
    age: 22,
    city: "Warszawa"
};
personExample.street = "Kwiatowa";
console.log(personExample);
personSecondExample.street = "Kwiatowa";
console.log(personSecondExample);
var product1 = {
    id: 1,
    name: "Mleko",
    price: 2.99
};
var product2 = {
    id: 2,
    name: "Chleb",
    price: 1.99,
    description: "Brązowy"
};
console.log(product1);
console.log(product2);
var productArray = [product1, product2];
for (var i = 0; i < productArray.length; i++) {
    console.log(productArray[i].name);
    console.log(productArray[i].price);
}
//extra
var product3 = {
    id: 3,
    name: "Czekolada",
    price: 3.99,
    description: "Czekoladowa"
};
var extendedProduct = __assign(__assign({}, product3), { kcal: 300 });
console.log(extendedProduct);
var userID = 1;
console.log(userID);
var statusVar = "available";
console.log(statusVar);
var employee1 = {
    name: "Adam",
    surname: "Mickiewicz",
    position: "writer",
    salary: 3000
};
console.log(employee1);
//part 3
//1 
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
//console.log(add(1, "2")); //ts2345: Argument of type 'string' is not assignable to parameter of type 'number'.
function welcome(name) {
    return "Hello, " + name;
}
console.log(welcome("Mateusz"));
//2
function calculateTax(amount, taxRate) {
    if (taxRate === null || taxRate === undefined) {
        taxRate = 0.23;
    }
    return amount * taxRate;
}
console.log(calculateTax(100, 0.1));
console.log(calculateTax(100));
//3
function logMsg(msg) {
    console.log(msg);
}
logMsg("Hello");
logMsg(String(123));
//part 4
//small idea change
var userId;
userId = "123";
console.log(userId);
userId = 123;
console.log(userId);
