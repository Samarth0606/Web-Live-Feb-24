// this keyword depends on how it is being called upon.

// 1. functional invocation
// 2. method invocation
// 3. constructor functions
// 4. indirect calling
// 5. arrow function

// -----------------------------------

// 1. functional invocation => this always points to `window object`

// function fn() {
//   console.log(this);
// }
// fn();

// ------------

// 2. method invocation/calling => this always points to the object inside which it is available

// let obj = {
//   a: 10,
//   fun: function () {
//     console.log(this);
//   },
// };
// obj.fun(); //obj

// ---------------------------

// eg:

// function sam() {
//   console.log(this);
// }
// sam(); //window

// -----------

// eg:
// let objec = {
//   a: 100,
//   fun: function () {
//     console.log(this);
//   },
// };
// let call = objec.fun;
// call();

// -----------

// eg:

// let obj = {
//   fun: function () {
//     console.log(this); //obj
//     function hey() {
//       console.log(this); //window
//     }
//     hey();
//   },
// };

// obj.fun();

// ------------------------

//3. constructor fn => this always points to the newly created object

// function Sam() {
//   console.log(this);
//   this.name = "sam";
//   this.email = "sam@gmail.com";
// }
// let s1 = new Sam(); // object

// -------------------------------
//only interview
// 4. indirect calling => call() , apply() , bind()

// let obj = {
//   a: 10,
//   fn: function () {
//     console.log(this);
//   },
// };

// let obj2 = {
//   a: 50,
// };

// // obj.fn();
// // obj2.fn();

// //this keyword ka reference badal rha hu
// obj.fn.call(obj2);

// ---------

// let obj = {
//   a: 10,
//   fn: function (d, e, f) {
//     console.log(this, d, e, f);
//   },
// };

// let obj2 = {
//   a: 50,
// };
// //this keyword ka reference badal rha hu => polymorphism
// obj.fn.call(obj2, 10, 20, 30); //run/execute
// obj.fn.apply(obj2, [10, 20, 30]); //run/execute

// ----------

// let obj = {
//   a: 10,
//   fn: function (d, e, f) {
//     console.log(this, d, e, f);
//   },
// };

// let obj2 = {
//   a: 50,
// };

// //makes a new copy of it
// // let myFn = obj.fn.bind(obj2, 30, 40, 50); //run/execute ❌
// // myFn();
// // ------
// let myFn2 = obj.fn.bind(100); //changing the ref
// myFn2();

// -------------------------------
// 5. arrow function => this depends on parent ka this.

// let obj = {
//   a: 20,
//   fn: () => {
//     console.log(this);
//   },
// };

// let fun = obj.fn;
// fun();

// let obj = {
//   a: 20,
//   fn: function () {
//     console.log(this);
//     function sam() {
//       console.log(this);
//     }
//     sam();
//   },
// };

// let fun = obj.fn;
// fun();

// ----

// let obj = {
//   a: 20,
//   fn: () => {
//     console.log(this);
//     function sam() {
//       console.log(this);
//     }
//     sam();
//   },
// };

// let fun = obj.fn;
// fun();

// -----

// let obj = {
//   a: 20,
//   fn: function () {
//     console.log(this);
//     let sam = () => {
//       console.log(this);
//     };
//     sam();
//   },
// };

// let fun = obj.fn;
// fun();

// -------

// let obj = {
//   a: 20,
//   fn: function () {
//     console.log(this);
//     let sam = () => {
//       console.log(this);
//     };
//     sam();
//   },
// };

// obj.fn();

// ----------

// let obj = {
//   a: 20,
//   fn: () => {
//     console.log(this);
//     let sam = () => {
//       console.log(this);
//     };
//     sam();
//   },
// };

// obj.fn();

// ----------

// let obj = {
//   a: 20,
//   fn: () => {
//     console.log(this);
//     function sam() {
//       console.log(this);
//     }
//     sam();
//   },
// };

// obj.fn();
