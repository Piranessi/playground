//0
var FirstName = "Adam";
var LastName = "Mickiewicz";
var FullName = FirstName + " " + LastName;
console.log(FullName);
//1
var booleanVal = true;
var booleanStrVal = "false";
booleanVal = booleanStrVal;
console.log("booleanVal: " + booleanVal);
//2
var booleanVal2 = true;
var booleanStrVal2 = "false";
booleanVal2 = Boolean(booleanStrVal2);
console.log("booleanVal2: " + booleanVal2);
//3
var anyVar = 54.3;
anyVar = Math.round(anyVar);
console.log("anyVar: " + anyVar);
//4
var arrStr = ["abc", "cde", "fgh,", "ijk", "asdd23", "asdd234", "asdd623"];
var arrStr2 = ["1abc", "1cde", "1fgh,", "1ijk", "1asdd23", "11133", "111"];
console.log("arrStr[]: " + arrStr.map(function (i) { return i.toUpperCase(); }));
console.log("arrStr[]: " + arrStr);
console.log("arrStr[] words with > 3 characters" + arrStr.filter(function (i) { return i.length > 3; }));
arrStr[7] = "added";
console.log("arrStr[]: " + arrStr);
console.log("arrStr[0]: " + arrStr.at(0));
console.log("arrStr.concat(arrStr2): " + arrStr.concat(arrStr2));
