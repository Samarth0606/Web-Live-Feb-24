//higher order functions
//1. if send an entire function(b) as an argument to some other function(a) then the other fn(a) is called HOF.
//2. when you return an entire function(c)  from some function (d) then d is your HOF.

//higher order function
// function a(fn) {
//   console.log("inside a");
//   console.log(fn);
//   fn();
// }

// function b() {
//   console.log("inside b");
// }
// a(b);

// --------------------

//hof
// function d() {
//   console.log("inside d");
//   function c() {
//     console.log("inside c");
//   }

//   return c;
// }

// -----------------------------------
//callback-functions
//fn which is passed as an argument(b) to someother fn(a) then the passed f(b) is called CB fn => it is compulsary to run that function.
// function a(fn) {
//   console.log("inside a");
//   console.log(fn);
// //   fn() //cb 😇
// }

// function b() {
//   console.log("inside b");
// }
// a(b);

// ----------------
//hof
function outer(fn) {
  console.log("i am outer");
  console.log(fn); //not decided yet
  fn(); //cb
}
//cb
function inner() {
  console.log("i am inner");
}

outer(inner);
