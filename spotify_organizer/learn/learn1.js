let arr = [undefined, "", "asd"];
let arr2 = ["ad", "eee", 5];
let a = arr[0] ?? "xd";
let strVar = "abcde";
let strVar2 = strVar.concat(strVar);



//slice, splice, concat, shift, unshift, pop, push,
// indexOf, lastIndexOf, at, chartAt
// switch, var, let, const
// ??, ??, &&=, ||=
// math.power
// funct(...params)

function typeofElementsInArrays(...param){
    console.log(param.entries());
    console.log("Deconstructing: ", param);
    for (const v of param){
        console.log("Typeof element: " +  v + " = " + typeof(v));
    }
}

typeofElementsInArrays(...arr, ...arr2);

console.log("---")
console.log(strVar2);
console.log(strVar);
console.log(strVar.concat(strVar));

let testStr = "abasd, asdasdsad, ,weweewew,ewew";
let foo = testStr.split(",");
console.log(typeof(foo) + " foo: " + foo);

for( const element of foo){
    console.log(element);
}