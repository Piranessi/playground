import { log } from "console";

//1)
let nameVar: string = "Mateusz";
const age: number = 22;
const isStudent: boolean = true;


//let num: number = 23;
//nameVar = num; // m2.ts:7:1 - error TS2322: Type 'number' is not assignable to type 'string'.

//2)
let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "cherry"];

console.log(`adding string: ${fruits[0]} to number ${numbers[0]} ${numbers[0] + fruits[0]}`);
console.log(`adding string: ${fruits[0]} to number ${numbers[0]+ fruits[0]} `);
//in both cases no error, why?

//3
let personExample: any = {
    name: "Adrian",
    age: 2,
    city: "Warszawa"
};

let personSecondExample: any = {
    name: "Adrian",
    age: 22,
    city: "Warszawa"
};

personExample.street = "Kwiatowa";
console.log(personExample);
personSecondExample.street = "Kwiatowa";
console.log(personSecondExample);



//part 2
//1

interface Product{
    id: number,
    name: string,
    price: number,
    description?: string
}

let product1: Product = {
    id: 1,
    name: "Mleko",
    price: 2.99
}

let product2: Product = {
    id: 2,
    name: "Chleb",
    price: 1.99,
    description: "Brązowy"
}

console.log(product1);
console.log(product2);

let productArray: Product[] = [product1, product2];
for(let i = 0; i < productArray.length; i++){
    console.log(productArray[i].name);
    console.log(productArray[i].price);
}

//extra
const product3: Product = {
    id: 3,
    name: "Czekolada",
    price: 3.99,
    description: "Czekoladowa"
};

const extendedProduct = {
    ...product3,
    kcal: 300
}
console.log(extendedProduct);
// 2
type ID = number;
let userID: ID = 1;
console.log(userID);

//3 
type Status = ("available" | "unavailable" | "ordered");
let statusVar: Status = "available";
console.log(statusVar);

//4
interface Person {
    name: string,
    surname: string
}

interface Employee extends Person {
    position: string,
    salary: number
}

let employee1: Employee = {
    name: "Adam",
    surname: "Mickiewicz",
    position: "writer",
    salary: 3000
}

console.log(employee1);

//part 3
//1 
function add(a: number, b: number): number {
    return a + b;
}
console.log(add(1, 2));
//console.log(add(1, "2")); //ts2345: Argument of type 'string' is not assignable to parameter of type 'number'.

function welcome(name: string): string {
    return "Hello, " + name;
}
console.log(welcome("Mateusz"));

//2

function calculateTax(amount: number, taxRate?: number): number {
    if (taxRate === null || taxRate === undefined) {
        taxRate = 0.23;
    }
    return amount * taxRate;
}
console.log(calculateTax(100, 0.1));
console.log(calculateTax(100));

//3
function logMsg(msg: string): void {
    console.log(msg);
}

logMsg("Hello");
logMsg(String(123));

//part 4
//little change for idea 1
let userId: string | number; //union type
userId = "123";
console.log(userId);
userId = 123;
console.log(userId);

function showInfo(data: string | number | boolean) {
    console.log(data);
}


//2
interface Loggable {
    log(msg: string): void;
}

