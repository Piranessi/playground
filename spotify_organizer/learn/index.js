const message = 'Hello world' // Try edit me

// Update header text
// document.querySelector('#header').innerHTML = message


const myArr = [];
const myStr = "asd";
const myBool = true;
const myObj = {
  name: "asd",
  surname: "bsd"
};

const myStack = [];
myStack.push(1);
for(let i = 0; i <5; i++)
{
  myStack.push(i);
}

const splice = myStack.splice(2,2);
console.log("splice "+splice);
console.log(myObj["surname"]);

console.log(myStack);
// Log to console
console.log(message)


for(let item in myObj){
  console.log(item);
}

function test()
{
  return 1;
}

// console.log(test())
// let a = confirm("asd");
// console.log(a);

var callback = ()=>{console.log("done")};
setTimeout(callback, 3000);
setTimeout(()=>{console.log("asdasdxxxx");}, 4000);

let numbers = [1,2,3,4,5,77,33];
let multipliednumbers = numbers.map((i)=>{return i*2});
console.log(multipliednumbers);

function getServerStatus() {
  const result = fetch("https://spidersweb.pl/asdassd");
  result.then((res, reject)=>{
    console.log("status: ", res.ok);
    console.log("reject: ", reject);
  });
};

function sumAsync(a, b){
    const p = new Promise((resolve, reject) => {
        if(a > 5) {
            reject("a > 5");
        }
        else{
          resolve(a+b);
        }

    });

    return p;
}

// console.log("getServerStatus start");
// getServerStatus();
// console.log("getServerStatus end");

console.log("sumAsync start");
sumAsync(7,3).then((res) => {
  console.log(res);
}).catch((error) => {console.log(error)});
console.log("sumAsync end");



var person = {
  name: "test"
}

var person2 = {
  name: "test2"
}

function printName(){
  console.log(this.name);
}

let bprintName = printName.bind(person2);
bprintName();

printName.call(person);
// printName.apply()
// printName();

function P(name, age){
  this.name = name;
  this.age = age;
}
P.prototype.describe = (text) => {
  console.log("this person is ", text);
}

const foo = new P();
const foo2 = function(){};
// const foo3 = ()=>{};
foo2.prototype = new P();
foo2.prototype.learn = function(){console.log("biol")};

let stud = new foo2();
stud.learn();
stud.describe("xddd");
foo.describe("lol");


let a = null;
let b = "txt";
let c = a ?? b;
console.log("c:", c);
const nobj = {name: "test"};
const sur = nobj?.surname;
console.log(sur);


let x1 = 0;
x1 ||= 5;
console.log("x1: ", x1);
const numX = 1_000_000;