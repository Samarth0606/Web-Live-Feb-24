// console.log(sam);
// sam2();

// function sam2() {
//   console.log("hui hui");
// }
// var sam = 100;

// ------------------

// console.log(sam);
// sam2();

// function sam2() {
//   console.log("hui hui");
// }
// let sam = 100;

// -----------------

// console.log(sam);
// sam2();

// function sam2() {
//   console.log("hui hui");
// }
// const sam = 100;

// -------------------------------------

// var b = 10;
// function a() {
//   console.log(b);
// }
// a();

// -------------------

// function outer() {
//   var b = 10;
//   inner();
//   function inner() {
//     console.log(b);
//   }
// }

// outer();

// -------------------
//lexical scoping  = local memory + parent lexcial scope

// console.log(a);

// var a = 10;

// function lol() {
//   console.log(a);
// }
// console.log(a);
// lol();

// --------------------
//block => swarg ka darwaza => checking
//no checking => jump ✅
// {
//   console.log("10");
//   console.log("sam");
//   console.log(true);
// }

// console.log("loll");

// ----------------------

// let score = 100;
// if (score > 30) {
//   let x = 20;
// }

// console.log(x);

// -------------------

// var => global & functional
// let & const => script & block

// var a = 10;
// let b = 20;
// if (true) {
//   var c = 100;
//   let d = 200;
// }

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// ------------------

//script ✅ => x = 10; => baad x

//block ✅ => x => 20 => khtm hote hi scope destroy

// -------------------

// let x = 10;
// {
//   let x = 20;
//   console.log(x); //20
// }

// console.log(x); //10

// ------
//global ✅ ✅ => x = 10->20 => 20/20
//functional

// var x = 10;
// {
//   var x = 20;
//   console.log(x); //20
// }

// console.log(x); //20

// ------------

//global => x = 10 => 10
//functional => x = 20 => 20 => destroy

// var x = 10;
// function sam() {
//   var x = 20;
//   console.log(x);
// }
// sam();
// console.log(x);

// ---------------------------

// console.log(a);
// console.log(b);
// console.log(c);
// var a = 10;
// let b = 100;
// const c = 1000;

// var a = 20;
// function sam() {
//   console.log(a); //und
//   var a = 20;
// }
// console.log(a); //20
// sam();

// ------------------

// let score = 50;
// if (score > 40) {
//   var x = 100;
// }
// console.log(x);

// ---------------------
