// function something() {}

// console.log(something()); //undef

// ----------------------------

// function something() {}

// console.log(new something()); //obj

// ---------------------------
//jab bhi kisi function ke aage async likhdo vo return krega 1 promise
// async function something() {}

// console.log(something()); //promise

// ---------

// async function something2() {
//   return 10;
// }

// console.log(something2()); //promise resolved with 10

// --------------------------

// async function something2() {
//   return 10; //resolved with 10 value
// }

// something2().then(function (d) {
//   console.log(d);
// });

// -----------------------

async function something2() {
  setTimeout(function () {
    // return 10;
  }, 2000);
  return 100;
}

something2().then(function (d) {
  console.log(d);
});
