// console.log("start");
// console.log("run after 4 seconds");
// console.log("end");

// ------------------------

// console.log("start");

// // setTimeout()
// setTimeout(function () {
//   console.log("run after 4 seconds");
// }, 4000);

// console.log("end");

// -----------------------

// console.log("start");

// setTimeout(function () {
//   console.log("run after 4 seconds");
// }, 4000);

// setTimeout(function () {
//   console.log("run after 2 seconds");
// }, 2000);

// console.log("end");

// ---------------------

// console.log("start");

// setTimeout(function () {
//   console.log("run after 4 seconds");
// }, 2000);

// setTimeout(function () {
//   console.log("run after 2 seconds");
// }, 2000);
// console.log("end");

// ---------------------

// console.log("start");

// setTimeout(function () {
//   console.log("run after 0 seconds");
// }, 0);

// console.log("end");

// ------------------------------
//global scope
for (var i = 0; i <= 4; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// -----------

//block scope
for (let i = 0; i <= 4; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
