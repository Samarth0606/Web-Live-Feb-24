//fn defin.
// function myFavFunctions() {
//   console.log("hello from fuctions");
// }

//function calling
// myFavFunctions(); myFavFunctions()
// myFavFunctions()
// myFavFunctions()

// ------------------
//parameterised functions
//paramter
// function sum(b, c) {
//   console.log(b + c);
// }
// sum(10, 20); //arguments

// --------

// make a function prints cube of a number (2 mins)

// function cube(num) {
//   console.log(num * num * num);
//   console.log(num ** 3);
// }
// cube(7);

// let abc = prompt("enter your value");
// console.log(abc);

// --------------
// let a = prompt("enter first number to be added");
// let b = prompt("enter second number to be added");

// console.log(a + b); //string
// // parseInt() -> number mei change
// console.log(parseInt(a) + parseInt(b));

// ---------------
// let abc = prompt("abc");
// console.log(abc);
// console.log(parseInt(abc)); //NAN (not a number)

// ---------------------------------------------------------

// function trio(num1, num2, num3) {
//   //undefined
//   console.log(num1);
//   console.log(num2);
//   console.log(num3); //umdef => Nan
//   console.log(num1 + num2 + num3);
// }

// trio(10, 20);

// ------
// default prameterised functions
// function trio(num1 = 100, num2 = 200, num3 = 300) {
//   console.log(num1);
//   console.log(num2);
//   console.log(num3);
//   console.log(num1 + num2 + num3);
// }

// trio(10, 20);

// --------------------
// num1 -> "sam"
// num2 -> 10 -> "10"
// num3 -> undefined -> "undefined"
// function blah(num1, num2, num3) {
//   console.log(num1 + num2 + num3); //typecasting -> "sam"+"10"+"undefined" (concatenation) -> sam10undefined
// }
// blah("sam", 10);

// -----------
// num1 -> 30
// num2 -> true -> 1
// num3 -> undef -> Nan
// function blah(num1, num2) {
function blah(num1, num2, num3) {
  console.log(num1 + num2 + num3); //typecasting -> 30 + true -> 1 => Nan
}
// blah(30, true);

console.log(typeof 10);
console.log(typeof "10");
console.log(typeof true);
console.log(typeof null); //object (yaad)
console.log(typeof undefined);
console.log(typeof NaN); //number (yaad)

// string > number > bool
