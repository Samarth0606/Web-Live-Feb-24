// let p1 = new Promise() //accepts a cb func

// let p1 = new Promise(function(){})

// let p1 = new Promise(function (sam, vohra) {});

// let p1 = new Promise(function (resolve, reject) {});

// ----------------------------

//situation-1 -> dost se tumne 100 rupee leme they and he agreed ✅ to give

// let p1 = new Promise(function (resolve, reject) {
//   let data = 100;
//   resolve(data);
// });

// console.log(p1);
//.then() , .catch() -> they both acccepts a callback functions.

// p1.then(function(){}).catch(function(){})

// p1.then(function (d) {
//   console.log(d);
// });

// -----------------------------

//situation-2 -> dost se tumne 100 rupee leme they and he denied ❌ to give

let p2 = new Promise(function (resolve, reject) {
  let error = "mai nhi de rha bhaadh mei jaa";
  reject(error);
});

// p2.then(function (d) {
//   console.log(d, "data");
// }).catch(function (err) {
//   console.log(err, "error");
// });

p2.catch(function (err) {
  console.log(err, "error");
});
